import type { Message } from './common';
import { MessageType, WS_URL } from './common';

export function watcher() {
  if (import.meta.env.MODE !== 'development') return;

  let needToUpdate = false;
  const socket = new WebSocket(WS_URL);

  socket.addEventListener('message', (event) => {
    const message: Message = JSON.parse(String(event.data));

    switch (message.type) {
      case MessageType.Updating: {
        if (needToUpdate) {
          socket.send(JSON.stringify({ type: MessageType.Done }));
          needToUpdate = false;

          window.location.reload();
        }

        return;
      }
      case MessageType.Waiting: {
        if (!needToUpdate) {
          needToUpdate = true;
        }

        return;
      }
    }
  });
}
