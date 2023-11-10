export const WS_PORT = 3000;
export const WS_URL = `ws://localhost:${WS_PORT}`;

export type Message = {
  type: MessageType;
  path?: string;
};

export enum MessageType {
  Waiting,
  Updating,
  Done,
}
