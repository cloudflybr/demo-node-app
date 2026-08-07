const http = require('http');
const port = process.env.PORT || 3000;
const hog = [];

http.createServer((req, res) => {
  if (req.url === '/eat') {
    // grab ~100MB per hit, hold forever
    hog.push(Buffer.alloc(100 * 1024 * 1024, 1));
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`eaten: ~${hog.length * 100}MB\n`);
    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<h1>🚀 CloudFly demo app v2</h1><p>crash-test build</p>');
}).listen(port, () => console.log(`up on ${port}`));
