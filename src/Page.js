import React from 'react';
import PropTypes from 'prop-types';

export default class Page extends React.Component {
  onBtnClick = (e) => {
    const { getPhotos } = this.props;

    const year = +e.currentTarget.innerText;
    getPhotos(year);
  };

  renderButtons = () => {
    const years = [2018, 2017, 2016, 2015, 2014, 2013];

    return years.map(item => (
      <li className="list__item" key={item}>
        <button className="btn" onClick={this.onBtnClick} type="button">
          {item}
        </button>
      </li>
    ));
  };

  renderTemplate = () => {
    const { error, photos, isFetching } = this.props;

    if (error) {
      return <p className="error">Во время загрузки произошла ошибка</p>;
    }

    if (isFetching) {
      return <p>Загрузка...</p>;
    }

    return photos.map(entry => (
      <div key={entry.id} className="photo">
        <img src={entry.sizes[0].url} alt="" />
      </div>
    ));
  };

  render() {
    const { year, photos } = this.props;

    return (
      <div>
        <ul className="list">{this.renderButtons()}</ul>
        <h3>
          {year} год [{photos.length}]
        </h3>
        {this.renderTemplate()}
      </div>
    );
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.instanceOf(Array).isRequired,
  getPhotos: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};
