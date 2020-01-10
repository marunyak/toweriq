import config from '../config';
import { fetchUsersSuccess, fetchUsersFail } from '../actions';

export const getUsersFetch = () => (dispatch) => {
  fetch(`${config.baseURL}users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then((res) => res.json())
    .then((response) => {
      dispatch(fetchUsersSuccess(response));
    })
    .catch((err) => {
      dispatch(fetchUsersFail(err));
    });
};
