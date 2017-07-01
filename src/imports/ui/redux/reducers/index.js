import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// APOLLO
import client from '/imports/ui/apollo/ApolloClient';

export default combineReducers({
  apollo: client.reducer(),
  routerReducer,
});
