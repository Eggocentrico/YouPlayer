import { IncomingMessage, ServerResponse } from 'http';

export default function handler(
  req: IncomingMessage,
  res: ServerResponse
): void {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ success: true, req }));
}
