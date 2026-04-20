# Pull Requests

## Creating a PR

- ALWAYS use a git worktree for the PR branch rather than checking out directly in the current working tree. Derive the path from the repo name to avoid conflicts: `WORKTREE_PATH="${REPO_ROOT}/../${REPO_NAME}-<description>"`. First run `git fetch origin main` so `origin/main` is up to date. Then create the worktree with `git worktree add "${WORKTREE_PATH}" --branch <branch-name> origin/main`, do all work inside it, then remove it with `git worktree remove "${WORKTREE_PATH}"` after the PR is raised.
- ALWAYS create pull requests in draft mode using the `--draft` flag with `gh pr create`.
- ALWAYS show a link to the created pull request.

## After a PR is Merged

Run the following steps after a pull request has been merged:

1. Fetch and prune remote-tracking branches:

   ```sh
   git fetch --all --prune --prune-tags
   ```

2. Switch to the main branch:

   ```sh
   git checkout main
   ```

3. Delete the local branch for the merged PR:

   ```sh
   git branch -D <branch-name>
   ```

4. Pull the latest changes from main:

   ```sh
   git pull origin main
   ```

5. Install packages using the appropriate package manager for the repo (e.g. `pnpm install`, `npm install`, `yarn install`, `pip install -r requirements.txt`).

   After running the install, let the user know they can avoid the "Contains expansion" prompt in future by adding the install command to the project's allow-list via `/update-config`.
