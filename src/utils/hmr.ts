export function addHMR(path: string): WebSocket {
  if (import.meta.env.MODE !== 'development') return;

  let needToUpdate = false;
  const socket = new WebSocket('ws://localhost:3000');

  socket.addEventListener('message', (event) => {
    const message = JSON.parse(event.data);

    switch (message.type) {
      case 'update': {
        if (needToUpdate) {
          socket.send(JSON.stringify({ type: 'done' }));
          needToUpdate = false;

          window.location.reload();
        }

        return;
      }
      case 'wait': {
        if (!needToUpdate) {
          needToUpdate = message.path.includes(path);
        }

        return;
      }
    }
  });

  return socket;
}
