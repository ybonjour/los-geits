#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o nounset

dir=$(cd -P -- "$(dirname -- "$0")" && pwd -P)

main() {
  local keyfile="${1:-}"
  local serviceAccount="gcr-full-access@yvu-website.iam.gserviceaccount.com"
  local image="gcr.io/yvu-website/losgeits"

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
