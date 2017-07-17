// import { createApolloServer } from 'meteor/orionsoft:apollo';
import { initAccounts } from 'meteor/nicolaslopezj:apollo-accounts';
import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

import cors from 'cors';
import graphqlServerExpressUpload from './uploadMiddleware';
import typeDefs from '../../../api/schema';
import resolvers from '../../../api/resolvers';





const options = {};
initAccounts(options);
console.log(typeDefs);
const schema = makeExecutableSchema({ typeDefs, resolvers });

createApolloServer(
  req => ({ // eslint-disable-line
    schema,
  }),
  {
    configServer(graphQLServer) {
      // add some more express middlewares before graphQL picks up the request
      // especially multer and graphqlServerExpressUpload allow for multipart formdata along the query
      // and therefore can take arbitrary binaries (uploading files through graphql)
      graphQLServer.use(cors({ credentials: true }), graphqlServerExpressUpload());
    },
  }
);
