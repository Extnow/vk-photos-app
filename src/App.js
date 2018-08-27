import React from 'react';
import { connect } from 'react-redux';
import User from './User';
import Page from './Page';
import { setYear } from './actions/PageActions';

const App = ({ user, page, setYearAction }) => (
  <div className="row">
    <Page photos={page.photos} year={page.year} setYear={setYearAction} />
    <User name={user.name} />
  </div>
);

const mapStateToProps = (store) => {
  console.log(store);

  return {
    user: store.user,
    page: store.page,
  };
};

const mapDispatchToProps = dispatch => ({
  setYearAction: year => dispatch(setYear(year)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
