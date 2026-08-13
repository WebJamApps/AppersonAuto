# AGENTS.md — AppersonAuto

Guidance for AI coding agents (agy/Antigravity, etc.) working in this repo.


## Cross-AI hard rules

The cross-AI hard rules that bind every agent on every surface are NOT duplicated here. They live
in exactly one file: `docs/cross-ai-rules.md` in the **`web-jam-tools` repository**, which normally
sits alongside this repository — `../web-jam-tools/docs/cross-ai-rules.md`, and on Josh's laptop
`/home/joshua/WebJamApps/web-jam-tools/docs/cross-ai-rules.md`.

Read that file before acting. If you cannot find it, STOP and say so — do not proceed without the
rules and do not reconstruct them from memory or from this file.
## What this is
A React + TypeScript + Vite front-end for Apperson Auto.

## Commands (get green before declaring done)
- `npm test` — the gate: stylelint + eslint + typecheck + unit tests.
- `npm run test:lint` / `npm run typecheck` for quicker partial checks.

## Workflow
- Always work on a feature branch off the latest `dev`. Never merge to `dev` or
  `main` — Josh is the mandatory human reviewer.
- Open PRs with the shared script
  (`~/WebJamApps/web-jam-tools/scripts/create-draft-pr.sh`), never
  `gh pr create` directly. It opens a **draft** PR based on **`dev`**.
- Bump the semver `version` in `package.json` **once per PR** on the feature
  branch (not once per push).
- Do not add, upgrade, or remove dependencies — ask first.

## Branch & memory hygiene
- One branch per task: never create or push any branch other than the one
  created for the current task.
- Once your PR is merged or closed, its branch is DEAD — never commit to it or
  push it again. Follow-up work (including afterthoughts like docs or lessons
  learned) starts on a NEW branch off the latest `dev`, with its own PR.
- Save lessons BEFORE the merge, not after: anything you learned during the task
  worth keeping (build quirks, selector gotchas, testing patterns — e.g. the
  output of a `/learn`-style memory pass) gets committed to this file's Memory
  section on the SAME task branch while the PR is still open, so it ships inside
  the PR. A post-merge push to the old branch strands the lesson and forces
  manual cleanup.

## Memory
- Declare Vite `define` variables (e.g., `__APP_VERSION__`) in `src/global.d.ts` to ensure TypeScript resolves them cleanly.
- Ensure the mobile navigation list (`.nav-list`) has `height: 100%` when using absolute positioning for bottom-anchored elements.


## Pull requests

### PR body conventions (violations may be machine-rejected)

- **Summary**: markdown bullet points, one change per bullet — never a run-on paragraph.
- **Test evidence**: paste the REAL runner output verbatim (the lines showing pass/fail and test counts), inside a ``` fence — never a description like "all tests passed". If the output has scrolled out of view, re-run the test command and paste what it prints.
- **Test plan**: exact commands and manual steps that exercise the change (start command, route/page, what to click, expected visible result) — a green test suite alone is not a plan.
- **Attribution**: `--author` names the model actually doing the work. Antigravity/agy sessions are ALWAYS `agy — Gemini 3.5 Flash (Medium)` or `(High)` — never write any other Gemini model name (models misremember their own identity; use this exact string).
