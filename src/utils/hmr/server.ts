import { watch } from 'chokidar';
import { WebSocket, WebSocketServer } from 'ws';
import { Message, MessageType, WS_PORT, WS_URL } from './common';

const map = new Set();

function debounce<A extends unknown[]>(callback: (...args: A) => void, delay: number) {
  let timer: NodeJS.Timeout;

  return function (...args: A) {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), delay);
  };
}

function startServer() {
  const wss = new WebSocketServer({ port: WS_PORT });

  wss.on('listening', () => console.log(`[HMR] Server is listening on ${WS_URL}`));

  wss.on('connection', (ws) => {
    map.add(ws);

    ws.addEventListener('close', () => map.delete(ws));

    ws.addEventListener('message', (event) => {
      const message: Message = JSON.parse(String(event.data));

      if (message.type === MessageType.Done) {
        ws.close();
      }
    });
  });
}

watch('src').on('all', (_, path) =>
  debounce(() => {
    map.forEach((ws: WebSocket) => ws.send(JSON.stringify({ type: MessageType.Waiting, path })));
  }, 400)()
);

watch('dist').on('all', (event) => {
  if (event !== 'add' && event !== 'addDir') return;

  debounce(() => {
    map.forEach((ws: WebSocket) => ws.send(JSON.stringify({ type: MessageType.Updating })));
  }, 100)();
});

startServer();
