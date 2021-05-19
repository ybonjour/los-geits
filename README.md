# Los geits

A dashboard to shows tram connections and PubliBike stations close to my home


## Run locally
To run locally you need to install docker and then run the serve script:
```
./serve.sh
```

## Deploy to Google Container Registry
1. Create a service account and store the key file locally (e.g. in the secrets folder)
2. Adapt the service account in `deploy.sh` if required
2. Run `./deploy.sh path/to/keyfile`