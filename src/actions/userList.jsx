export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAIL = 'FETCH_USERS_FAIL';

export const fetchUsers = () => ({
  type: FETCH_USERS,
});

export const fetchUsersSuccess = (payload) => ({
  type: FETCH_USERS_SUCCESS,
  payload,
});

export const fetchUsersFail = (error) => ({
  type: FETCH_USERS_FAIL,
  error,
});
