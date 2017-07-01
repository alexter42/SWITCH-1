import { initAccounts } from 'meteor/nicolaslopezj:apollo-accounts';
import { createApolloServer } from 'meteor/apollo';
import { loadSchema, getSchema } from 'graphql-loader';
import { makeExecutableSchema } from 'graphql-tools';
import { apolloUploadExpress } from './apollo-upload-server.js';

import cors from 'cors';
import typeDefs from '../../../api/schema';
import resolvers from '../../../api/resolvers';
import bodyParser from 'body-parser';

const options = {};
initAccounts(options);
loadSchema({ typeDefs, resolvers });
const graphqlConfiguration = getSchema();

// print the whole schema (merged) when server is started
// console.log(graphqlConfiguration.typeDefs); // eslint-disable-line
const schema = makeExecutableSchema(graphqlConfiguration);

createApolloServer(
  req => ({ // eslint-disable-line
    schema,
  }),
  {
    configServer(graphQLServer) {
      // add some more express middlewares before graphQL picks up the request
      graphQLServer.use(cors({ credentials: true }));
      graphQLServer.use(bodyParser.json(), apolloUploadExpress({}));
    },
  }
);
