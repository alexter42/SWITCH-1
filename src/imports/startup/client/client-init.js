import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
// APOLLO SPECIFIC
import client from '/imports/ui/apollo/ApolloClient';
import store from '/imports/ui/redux/store/index';
import { ApolloProvider } from 'react-apollo';

import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

import AppContainer from '/imports/ui/containers/AppContainer';

Meteor.startup(() => {
  document.body.innerHTML = '<div id="app"></div>';
  render(
    <ApolloProvider client={client} store={store}>
      <ConnectedRouter history={history}>
        <AppContainer client={client} history={history} />
      </ConnectedRouter>
    </ApolloProvider>,
    document.getElementById('app')
  );
});
