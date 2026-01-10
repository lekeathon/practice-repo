#!/bin/bash
set -euo pipefail

# Script: pull-on-login.sh
# Usage: this script reads a file named .pull_repos (one absolute path per line)
# and runs `git -C <path> pull --ff-only` for each repository.

LOG_DIR="$HOME/Library/Logs/pull-on-login"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/$(date +%Y-%m-%d-%H%M%S).log"

REPO_LIST_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_FILE="$REPO_LIST_DIR/.pull_repos"

if [ ! -f "$REPO_FILE" ]; then
  echo "No repo list found at $REPO_FILE" | tee "$LOG_FILE"
  exit 0
fi

echo "Starting git pull run: $(date)" | tee -a "$LOG_FILE"

while IFS= read -r repo; do
  repo_trimmed="$(echo "$repo" | sed -e 's/^\s*//' -e 's/\s*$//')"
  [ -z "$repo_trimmed" ] && continue
  [ ! -d "$repo_trimmed/.git" ] && {
    echo "Skipping: $repo_trimmed (not a git repo)" | tee -a "$LOG_FILE"
    continue
  }
  echo "Pulling: $repo_trimmed" | tee -a "$LOG_FILE"
  if git -C "$repo_trimmed" pull --ff-only >>"$LOG_FILE" 2>&1; then
    echo "Success: $repo_trimmed" | tee -a "$LOG_FILE"
  else
    echo "Failed: $repo_trimmed (see log)" | tee -a "$LOG_FILE"
  fi
done < "$REPO_FILE"

echo "Finished: $(date)" | tee -a "$LOG_FILE"
