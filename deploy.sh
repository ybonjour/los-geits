#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o nounset

dir=$(cd -P -- "$(dirname -- "$0")" && pwd -P)

main() {
  local keyfile="${1:-}"
  local project="los-geits"
  local region="us-central1"
  local serviceAccount="gcr-93@los-geits.iam.gserviceaccount.com"
  local image="gcr.io/los-geits/los-geits"
  local gcloud="${dir}/gcloud-local"

  if [ ! -f "${keyfile}" ]; then
    echo "USAGE: $0 <keyfile for gcr login>"
    exit 1
  fi

  if [ -z "${DIRECTIONS_API_KEY:-}" ]; then
    echo "Please provide a DIRECTIONS_API_KEY environement variable"
    exit 1
  fi

  pushd "${dir}"
    cat "${keyfile}" | docker login -u _json_key --password-stdin https://gcr.io
	  docker build -t ${image} --platform linux/amd64 .
	  docker push ${image}
    ${gcloud} run deploy los-geits --region=${region} --image=${image} --allow-unauthenticated --set-env-vars "DIRECTIONS_API_KEY=${DIRECTIONS_API_KEY}"
  popd
}

main "$@"
