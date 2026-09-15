// Fake build: mimics the real info-webapp output layout (dist/index.html +
// dist/assets/app.js) so the deploy workflow can be exercised end to end.
const fs = require('fs');
const ts = new Date().toISOString();
fs.mkdirSync('dist/assets', { recursive: true });
fs.writeFileSync(
  'dist/index.html',
  `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><title>svr-puller-test</title></head>
<body>
<h1>svr-puller-test</h1>
<p>Fake build for pipeline testing. Built ${ts}</p>
<script src="assets/app.js"></script>
</body>
</html>
`
);
fs.writeFileSync('dist/assets/app.js', `console.log("svr-puller-test build ${ts}");\n`);
console.log('built', ts);
