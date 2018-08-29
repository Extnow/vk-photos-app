import React from 'react';
import { connect } from 'react-redux';
import Page from './Page';
import { getPhotos } from './actions/PageActions';

class PageContainer extends React.Component {
  render() {
    const { page, getPhotosAction } = this.props;

    return (
      <Page
        photos={page.photos}
        year={page.year}
        error={page.error}
        getPhotos={getPhotosAction}
        isFetching={page.isFetching}
      />
    );
  }
}

const mapStateToProps = store => ({
  page: store.page,
});

const mapDispatchToProps = dispatch => ({
  getPhotosAction: year => dispatch(getPhotos(year)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PageContainer);
