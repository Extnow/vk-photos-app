import { GET_PHOTO_REQUEST, GET_PHOTO_SUCCESS, GET_PHOTO_FAIL } from '../actions/PageActions';

const initialState = {
  year: 2018,
  photos: [],
  isFetching: false,
  error: '',
};

export default function pageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTO_REQUEST:
      return {
        ...state, year: action.payload, isFetching: true, error: '',
      };

    case GET_PHOTO_SUCCESS:
      return {
        ...state, photos: action.payload, isFetching: false, error: '',
      };

    case GET_PHOTO_FAIL:
      return { ...state, error: action.payload.message, isFetching: false };

    default:
      return state;
  }
}
