# ai-skills

A centralised collection of AI coding rules, shareable across multiple repos via `git subtree`.

Rules live in `rules/` as focused markdown files. Each repo imports whichever rules it needs using the `@import` syntax supported by Claude Code and Codex — so the rules are always active without any manual invocation.

> **Other AI tools** (Cursor, Copilot, Windsurf, etc.) use different mechanisms to load rules. Refer to their documentation for how to reference external markdown files.

## Rules

See the [`rules/`](rules/) directory.

## Using these rules in another repo

### Add this repo as a subtree

Run this once in your target repo, from the repo root:

```sh
git subtree add --prefix rules https://github.com/mcalthrop/claude-skills main --squash
```

This checks out the `rules/` files from this repo into `rules/` in your target repo, so you will need to commit the changes.

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

So to pick them up, pull in the latest changes:

```sh
git subtree pull --prefix rules https://github.com/mcalthrop/claude-skills main --squash
```

You will need to commit the changes.

If you are importing individual files, check whether any rules were added, removed, or renamed and update your instructions file accordingly.
