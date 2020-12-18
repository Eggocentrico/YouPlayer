export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');

  const { username, email, password } = req.body;

  console.log(`${username}, ${email}, ${password}`);
  res.statusCode = 200;
  res.end(JSON.stringify({ success: true }));
}
