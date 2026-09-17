// Fake build: mimics the real race-dashboard output layout (dist/index.html +
// dist/assets/app.js) so the deploy workflow can be exercised end to end.
// The real build is `tsc -b && vite build`; here a plain node script stands in so
// the pipeline (npm ci -> build -> BUILD_INFO -> orphan force-push) can be proven
// without pulling the full Vite/React toolchain.
const fs = require('fs');
const ts = new Date().toISOString();
const api = process.env.VITE_API_URL || '(unset)';
fs.mkdirSync('dist/assets', { recursive: true });
fs.writeFileSync(
  'dist/index.html',
  `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><title>race-dashboard puller test</title></head>
<body>
<h1>race-dashboard puller test</h1>
<p>Fake overlay build for pipeline testing. Built ${ts}</p>
<script src="assets/app.js"></script>
</body>
</html>
`
);
fs.writeFileSync('dist/assets/app.js', `console.log("race-dashboard build ${ts}, VITE_API_URL=${api}");\n`);
console.log('built', ts, 'VITE_API_URL=', api);
