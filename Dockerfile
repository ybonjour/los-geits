FROM node
COPY web /web
RUN cd /web; yarn install; yarn build;
COPY backend /backend
RUN cd /backend; npm install;

FROM node
COPY --from=0 /backend /root/losgeits
COPY --from=0 /web/dist /root/losgeits/public
WORKDIR /root/losgeits
ENV PORT=80
ENV STATIC_DIRECTORY=/root/losgeits/public
ENTRYPOINT "node" "/root/losgeits/index.js"

