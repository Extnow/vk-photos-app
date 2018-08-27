import React from 'react';
import PropTypes from 'prop-types';

export default class Page extends React.Component {
  onBtnClick = (e) => {
    const { setYear } = this.props;

    const year = +e.currentTarget.innerText;
    setYear(year);
  };

  render() {
    const { year, photos } = this.props;

    return (
      <div>
        <div>
          <button onClick={this.onBtnClick} type="button">
            2018
          </button>
          <button onClick={this.onBtnClick} type="button">
            2017
          </button>
          <button onClick={this.onBtnClick} type="button">
            2016
          </button>
          <button onClick={this.onBtnClick} type="button">
            2015
          </button>
        </div>
        <p>
          У тебя, {photos.length} фото за {year} год
        </p>
      </div>
    );
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.instanceOf(Array).isRequired,
  setYear: PropTypes.func.isRequired,
};
