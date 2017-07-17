import { compose, withProps, withState, withHandlers } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import AppRoutes from './App';

const FRAGMENT_POINTSFILE_FIELDS = gql`
  fragment pointsFilesFields on User {
    _id
  }
`;

export default compose(
  withState('pointsFile', 'savePointsFile', null),
  graphql(gql`
    query getCurrentUser {
      me {
       _id
       name
     }
    }
  `),
  graphql(gql`
    mutation saveFilePoints ($pointsFile: Upload!) {
      saveFilePoints (pointsFile: $pointsFile) {
        ...pointsFilesFields
      }
    }
    ${FRAGMENT_POINTSFILE_FIELDS}
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
    handleSavePointsFile: ({ mutate, savePointsFile }) => pointsFile => {
      savePointsFile(pointsFile);
      mutate({
        variables: {
          pointsFile,
        },
      });
    },
  })
)(AppRoutes);
