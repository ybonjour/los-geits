#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o nounset

dir=$(cd -P -- "$(dirname -- "$0")" && pwd -P)

main() {
  local keyfile="${1:-}"
  local serviceAccount="gcr-93@los-geits.iam.gserviceaccount.com"
  local image="gcr.io/los-geits/los-geits"

  if [ ! -f "${keyfile}" ]; then
    echo "USAGE: $0 <keyfile>"
    exit 1
  fi

  pushd "${dir}"
    gcloud auth login
    gcloud auth activate-service-account ${serviceAccount} --key-file=${keyfile}
    gcloud auth configure-docker
	  docker build -t ${image} .
	  docker push ${image}
  popd
}

main "$@"
