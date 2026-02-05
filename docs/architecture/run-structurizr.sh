#!/bin/bash

# Ensure Docker is running
if ! docker info > /dev/null 2>&1; then
  echo "Error: Docker is not running. Please start Docker."
  exit 1
fi

# Path to the directory containing this script
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

echo "Starting Structurizr Lite..."
echo "Access the C4 Model at: http://localhost:8080"

# Run Structurizr Lite container
# Mounts the current directory (containing workspace.dsl) to /usr/local/structurizr in the container
docker run -it --rm -p 8080:8080 -v "$DIR":/usr/local/structurizr structurizr/lite
