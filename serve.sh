#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o nounset

dir=$(cd -P -- "$(dirname -- "$0")" && pwd -P)

main() {
  if [ -z "${DIRECTIONS_API_KEY:-}" ]; then
    echo "Please provide a DIRECTIONS_API_KEY environement variable"
    exit 1
  fi
  pushd "${dir}"
    docker stop losgeits &> /dev/null || true
	  docker build -t losgeits .
	  docker run --rm -p 80:80 -e DIRECTIONS_API_KEY=${DIRECTIONS_API_KEY} --name losgeits losgeits
  popd
}

main "$@"
