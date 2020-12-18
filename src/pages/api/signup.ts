import { IncomingMessage, ServerResponse } from 'http';

export default function handler(
  req: IncomingMessage,
  res: ServerResponse
): void {
  res.setHeader('Content-Type', 'application/json');
  console.log(req);

  res.statusCode = 200;
  res.end(JSON.stringify({ success: true }));
}
