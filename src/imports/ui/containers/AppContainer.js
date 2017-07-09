import { compose, withProps, withState, withHandlers, lifecycle } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import AppRoutes from '/imports/startup/client/routes';

export default compose(
  graphql(gql`
    query getCurrentUser {
      me {
       _id
       name
     }
    }
  `),
  withProps(({ data: { me, loading } }) => ({
    loggedInUser: me,
    loading,
  })),
  withHandlers({
    isAuthenticated: ({ data }) => () => {
      console.log('refetch');
      data.refetch();
    },
  })
)(AppRoutes);
