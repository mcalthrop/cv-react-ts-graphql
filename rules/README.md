# ai-skills

A centralised collection of AI coding rules, shareable across multiple repos via `git subtree`.

Rules live in the repo root as focused markdown files. Each repo imports whichever rules it needs using the `@import` syntax supported by Claude Code and Codex — so the rules are always active without any manual invocation.

> **Other AI tools** (Cursor, Copilot, Windsurf, etc.) use different mechanisms to load rules. Refer to their documentation for how to reference external markdown files.

## Rules

See the rule files in the repo root (e.g. [`general.md`](general.md), [`all.md`](all.md)).

## Using these rules in another repo

### Add this repo as a subtree

Run this once in your target repo, from the repo root:

```sh
git checkout -b chore/add-ai-rules
git subtree add --prefix rules https://github.com/mcalthrop/ai-skills main --squash
```

`git subtree add` creates a commit automatically, so create a branch first to keep the change reviewable via a PR.

### Import rules into your instructions file

Both Claude Code (`CLAUDE.md`) and Codex (`AGENTS.md`) support `@path/to/file` imports.

To import all rules, add a single line:

```md
@rules/all.md
```

Or import only the rules you need:

```md
@rules/general.md
@rules/zsh-node-commands.md
@rules/code-organisation.md
@rules/pull-requests.md
@rules/conventional-commits.md
@rules/conventional-branch-names.md
```

The tool reads the instructions file automatically, so the imported rules are always active.

### Update the rules

When the rules in this repo change, your repo won't automatically see them.

So to pick them up, create a branch and pull in the latest changes:

```sh
git checkout -b chore/update-ai-rules
git subtree pull --prefix rules https://github.com/mcalthrop/ai-skills main --squash
```

Like `git subtree add`, this creates a commit automatically.

If you are importing individual files, check whether any rules were added, removed, or renamed and update your instructions file accordingly.
