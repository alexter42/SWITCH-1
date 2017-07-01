import ApolloClient from 'apollo-client';
import { meteorClientConfig } from 'meteor/apollo';
import { createBatchingNetworkInterface } from 'apollo-upload-client';

const client = new ApolloClient(
  meteorClientConfig({
    networkInterface: createBatchingNetworkInterface({
      uri: '/graphql',
    }),
  })
);

export default client;
