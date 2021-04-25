#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o nounset

dir=$(cd -P -- "$(dirname -- "$0")" && pwd -P)

main() {
  pushd "${dir}"
	  docker build -t losgeits .
	  docker run --rm -d -p 80:80 --name losgeits losgeits
  popd
}

main "$@"
