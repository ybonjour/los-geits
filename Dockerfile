FROM node

ENV NODE_OPTIONS=--openssl-legacy-provider

COPY web/package.json /web/package.json
COPY web/yarn.lock /web/yarn.lock

COPY backend/package.json /backend/package.json
COPY backend/package-lock.json /backend/package-lock.json

RUN cd /web; yarn install
RUN cd /backend; npm install

COPY web /web
RUN cd web; npx browserslist@latest --update-db
RUN cd web; yarn build

COPY backend /backend

FROM node
COPY --from=0 /backend /root/losgeits
COPY --from=0 /web/dist /root/losgeits/public
WORKDIR /root/losgeits
ENV PORT=80
ENV STATIC_DIRECTORY=/root/losgeits/public
ENTRYPOINT "node" "/root/losgeits/index.js"

