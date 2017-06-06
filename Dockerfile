FROM kkarczmarczyk/node-yarn:6.9
RUN mkdir /app
WORKDIR /app

# install packages
ADD package.json /app/package.json
RUN yarn

# babel-node config
ADD .babelrc /app/.babelrc

EXPOSE 5000

CMD ["yarn", "start"]
