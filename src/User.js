import React from 'react';
import PropTypes from 'prop-types';

export default class User extends React.Component {
  renderTemplate = () => {
    const {
      name, error, isFetching, handleLogin,
    } = this.props;

    if (error) {
      return <p>Во время запроса произошла ошибка, обновите страницу</p>;
    }

    if (isFetching) {
      return <p>Загрузка...</p>;
    }

    if (name) {
      return <p>Привет, {name}</p>;
    }

    return (
      <button className="btn" type="button" onClick={handleLogin}>
        Войти
      </button>
    );
  };

  render() {
    return <div>{this.renderTemplate()}</div>;
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
};
