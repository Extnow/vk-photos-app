export const GET_PHOTO_REQUEST = 'GET_PHOTO_REQUEST';
export const GET_PHOTO_SUCCESS = 'GET_PHOTO_SUCCESS';
export const GET_PHOTO_FAIL = 'GET_PHOTO_FAIL';

let photosArr = [];
let cached = false;

function makeYearPhotos(photos, selectedYear) {
  let createdYear = [];
  const yearPhotos = [];

  photos.forEach((item) => {
    createdYear = new Date(item.date * 1000).getFullYear();

    if (createdYear === selectedYear) {
      yearPhotos.push(item);
    }
  });

  return yearPhotos;
}

function getMorePhotos(offset, count, year, dispatch) {
  // eslint-disable-next-line no-undef
  VK.Api.call(
    'photos.getAll',
    {
      extends: 1,
      count,
      offset,
      v: '5.80',
    },
    (r) => {
      try {
        photosArr = photosArr.concat(r.response.items);
        if (offset <= r.response.count) {
          // eslint-disable-next-line no-param-reassign
          offset += 50;
          getMorePhotos(offset, count, year, dispatch);
        } else {
          const photos = makeYearPhotos(photosArr, year);
          cached = true;
          dispatch({
            type: GET_PHOTO_SUCCESS,
            payload: photos,
          });
        }
      } catch (e) {
        dispatch({
          type: GET_PHOTO_FAIL,
          error: true,
          payload: new Error(e),
        });
      }
    },
  );
}

export function getPhotos(year) {
  return (dispatch) => {
    dispatch({
      type: GET_PHOTO_REQUEST,
      payload: year,
    });

    if (cached) {
      const photos = makeYearPhotos(photosArr, year);
      dispatch({
        type: GET_PHOTO_SUCCESS,
        payload: photos,
      });
    } else {
      getMorePhotos(0, 50, year, dispatch);
    }
  };
}
