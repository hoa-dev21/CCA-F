#!/usr/bin/env bash
set -euo pipefail
cd -- "$(dirname -- "${BASH_SOURCE[0]}")"

# Trust only this workspace for these commands; its .git was created by
# CodexSandboxOffline, while the desktop shell runs as the workspace owner.
study_repo=$(pwd -W)
git() {
  command git -c "safe.directory=$study_repo" "$@"
}

target='git@github.com:hoa-dev21/claude_architecture.git'
if [[ ! -d .git ]]; then
  git init -b main
fi
branch=$(git symbolic-ref --short HEAD)
if [[ "$branch" != main ]]; then
  printf 'Current branch is %s. Ask your assistant to check before pushing.\n' "$branch"
  exit 1
fi

if origin=$(git remote get-url origin 2>/dev/null); then
  case "$origin" in
    https://github.com/hoa-dev21/claude_architecture.git|git@github.com:hoa-dev21/claude_architecture.git)
      git remote set-url origin "$target" ;;
    *) printf 'Origin points to another repository: %s\n' "$origin"; exit 1 ;;
  esac
else
  git remote add origin "$target"
fi

printf 'Checking repository access using your SSH key...\n'
git ls-remote origin >/dev/null
git add --all
if ! git diff --cached --quiet; then
  git commit -m 'Add Vietnamese architect study library and local tutor web app'
fi
printf 'Pushing main to GitHub...\n'
git push -u origin main
printf '\nDone: https://github.com/hoa-dev21/claude_architecture\n'
