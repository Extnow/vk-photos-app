import React from 'react';
import { connect } from 'react-redux';
import User from './User';
import { handleLogin } from './actions/UserActions';

class UserContainer extends React.Component {
  render() {
    const { user, handleLoginAction } = this.props;

    return (
      <User
        name={user.name}
        isFetching={user.isFetching}
        error={user.error}
        handleLogin={handleLoginAction}
      />
    );
  }
}

const mapStateToProps = store => ({
  user: store.user,
});

const mapDispatchToProps = dispatch => ({
  handleLoginAction: () => dispatch(handleLogin()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserContainer);
