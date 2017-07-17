import { connect } from 'react-redux';
import compose from 'recompose/compose';
import branch from 'recompose/branch';
import renderComponent from 'recompose/renderComponent';
import { isLoggedIn, authInProgress } from './selectors/auth';

const mapStateToProps = state => ({
  loggedIn: isLoggedIn(state),
  inProgress: authInProgress(state),
});
export default (LoggedInComponent, LoggedOutComponent) =>
  compose(
    connect(mapStateToProps),
    branch(
      ({ loggedIn, inProgress }) => loggedIn || inProgress,
      renderComponent(LoggedInComponent),
      renderComponent(LoggedOutComponent)
    )
  );
