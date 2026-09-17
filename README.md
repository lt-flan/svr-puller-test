# svr-puller-test

Throwaway scratch repo to exercise the LiquidGecko deploy workflow. Repurposed on
2026-09-17 to prove the `SVR-Hector-App/svr-dashboard` (live overlay) variant: it
carries the SAME `.github/workflows/deploy.yml` and a tiny fake
`dashboard/race-dashboard/` (no dependencies) whose build writes `dist/index.html`
and `dist/assets/app.js`.

Pushing to `master` (or running the workflow) builds the fake overlay and force-pushes
it to the orphan `deploy` branch, exactly as the real pipeline does, including the
3-line `dist/BUILD_INFO` (sha, built, branch) and the `VITE_API_URL` bake.

Contains no SVR source.
