const chokidar = require('chokidar');
const ws = require('ws');

const map = new Set();

function debounce(func, timeout) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

function run() {
  const wss = new ws.WebSocketServer({ port: 3000 });

  wss.on('listening', () => console.log(`[HMR] Server is listening`));

  wss.on('connection', (ws) => {
    map.add(ws);

    ws.addEventListener('close', () => map.delete(ws));
    ws.addEventListener('message', (event) => {
      const message = JSON.parse(event.data);
      if (message.type === 'done') {
        ws.close();
      }
    });
  });
}

const debounceSrc = debounce(function (path) {
  map.forEach((ws) => ws.send(JSON.stringify({ type: 'wait', path })));
}, 400);

chokidar.watch('src').on('all', (_, path) => debounceSrc(path));

const debounceDist = debounce(() => {
  map.forEach((ws) => ws.send(JSON.stringify({ type: 'update' })));
}, 100);

chokidar.watch('dist').on('all', (event) => {
  if (event !== 'add' && event !== 'addDir') return;
  debounceDist();
});

run();
