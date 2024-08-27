#!/bin/bash

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title Git Clone
# @raycast.mode compact

# Optional parameters:
# @raycast.icon 🧬
# @raycast.argument1 { "type": "text", "placeholder": "GitHub Repo URL" }

# Documentation:
# @raycast.description Clone a GitHub repository into ~/code directory
# @raycast.author mlnchk
# @raycast.authorURL https://raycast.com/mlnchk

# Check if the argument is provided
if [ -z "$1" ]; then
  echo "Please provide a GitHub repository URL"
  exit 1
fi

# Extract repo name from URL
repo_name=$(basename -s .git "$1")

# Set the target directory
target_dir="$HOME/code/$repo_name"

# Clone the repository
if git clone "$1" "$target_dir"; then
  echo "Repository cloned successfully to $target_dir"
else
  echo "Failed to clone repository"
  exit 1
fi
