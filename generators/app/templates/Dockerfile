FROM node:14.16.0 as builder

ARG NPM_TOKEN

WORKDIR /home

# Install the dependencies required to generate the production code
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install

COPY . /home

# Generate the deployable code and install only production dependencies
RUN npm run build && rm -r node_modules && npm install --production

# Build an image with only the production code and dependencies
FROM node:14.16.0-alpine

WORKDIR /app
COPY --from=builder /home/dist ./dist
COPY --from=builder /home/node_modules ./node_modules
COPY --from=builder /home/package.json /home/package-lock.json ./

CMD ["npm", "run", "start"]
