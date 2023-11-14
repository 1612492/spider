import { watch } from 'chokidar';
import { WebSocket, WebSocketServer } from 'ws';
// https://github.com/TypeStrong/ts-node/issues/1833
import { Message, MessageType, WS_PORT, WS_URL } from './common.js';

const map = new Set<WebSocket>();

function debounce<A extends unknown[]>(
  callback: (...args: A) => void,
  delay: number
) {
  let timer: NodeJS.Timeout;

  return function (...args: A) {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), delay);
  };
}

function startServer() {
  const wss = new WebSocketServer({ port: WS_PORT });

  wss.on('listening', () =>
    console.log(`[HMR] Server is listening on ${WS_URL}`)
  );

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
    map.forEach((ws) =>
      ws.send(JSON.stringify({ type: MessageType.Waiting, path }))
    );
  }, 100)()
);

watch('dist').on('all', (event) => {
  if (event !== 'add' && event !== 'addDir') return;

  debounce(() => {
    map.forEach((ws) =>
      ws.send(JSON.stringify({ type: MessageType.Updating }))
    );
  }, 400)();
});

startServer();
