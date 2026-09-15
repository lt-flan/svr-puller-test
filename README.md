# svr-puller-test

Throwaway scratch repo to exercise the LiquidGecko deploy workflow used by
`SVR-Hector-App/svr-website`. It carries the SAME `.github/workflows/deploy.yml`
and a tiny fake `info-webapp/` (no dependencies) whose build writes
`dist/index.html` and `dist/assets/app.js`.

Pushing to `master` (or running the workflow) builds the fake site and force-pushes
it to the orphan `deploy` branch, exactly as the real pipeline does. Kept in place so
the host-side puller test can poll a real `deploy` branch.

Contains no SVR source.
