import { Container } from 'typedi';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { graphqlUploadExpress } from 'graphql-upload';
import Resolvers from './graphql/resolvers';
//import { PingResolver } from './graphql/resolvers/ping.resolver';

//const PingResolverInstance = Container.get<PingResolver>(PingResolver);

export const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: Resolvers,
      validate: false,
      container: Container,
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  await server.start();

  app.use(graphqlUploadExpress({ maxFiles: 5, maxFileSize: 10000000 }));

  server.applyMiddleware({ app, path: '/graphql' });

  return app;
};
