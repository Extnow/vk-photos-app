import React from 'react';
import { connect } from 'react-redux';
import User from './User';
import Page from './Page';
import { setYear } from './actions/PageActions';

const App = ({ user, page, setYearAction }) => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Мой топ фоток</h1>
    </header>
    <User name={user.name} />
    <Page photos={page.photos} year={page.year} setYear={setYearAction} />
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
