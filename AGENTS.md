# AGENTS.md — AppersonAuto

Guidance for AI coding agents (agy/Antigravity, etc.) working in this repo.

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
(Add lessons learned here, one bullet each.)
