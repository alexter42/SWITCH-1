import thunk from 'redux-thunk';
import reducers from '../reducers';
import client from '/imports/ui/apollo/ApolloClient';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';

// create a redux store by providing reducers and middleware
// currently using thunk middleware
// we also need to provide client.middleware() to let apollo/redux know about eachother.
// we use composeWithDevTools which lets us add redux devtools at some point.

const history = createHistory();
const RouterMiddlewareWithHistory = routerMiddleware(history);

const store = createStore(
  reducers,
  {}, // initial state is blank
  composeWithDevTools(applyMiddleware(thunk, client.middleware(), RouterMiddlewareWithHistory))
);

export default store;
