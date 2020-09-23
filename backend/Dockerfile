FROM node:lts-alpine AS builder
WORKDIR /app

COPY . .

RUN yarn && yarn build && npm prune --production

FROM node:lts-alpine
WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist .

USER node
CMD [ "node", "main" ]
