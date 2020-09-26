FROM alpine:latest

ENV TOR_USER=tor_alpine

RUN apk add --no-cache --update tor

RUN addgroup -g 19001 -S $TOR_USER
RUN adduser -u 19001 -G $TOR_USER -S $TOR_USER

ENTRYPOINT [ "tor" ]
