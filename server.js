const http = require('http');
   const port = process.env.PORT || 3000;

   http.createServer((req, res) => {
     res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
     res.end('<h1>🚀 CloudFly demo app v2.0</h1><p>Deployed from GitHub via git push.</p>');
   }).listen(port, () => console.log(`up on ${port}`));
