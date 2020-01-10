import { FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAIL } from '../actions';

const initialState = {
  users: [],
  loading: false,
  error: false
};

export const users = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USERS:
      return {
        ...state,
        loading: true
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: [...payload],
        loading: false
      };
    case FETCH_USERS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
};
