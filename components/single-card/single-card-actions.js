import Resources from '../../helpers/resources';

export const NETWORK_ERROR = 'NETWORK_ERROR'; // TODO
export const USER_ROLE_ACQUIRED = 'USER_ROLE_ACQUIRED';

export function getUserRoles() {
  return dispatch =>
    Resources.roles
      .get()
      .send()
      .then(
        (payload) => {
          if (payload.data) {
            dispatch({
              type: USER_ROLE_ACQUIRED,
              results: payload.data
            });
          } else {
            throw new Error(payload.message);
          }
        },
        (error) => {
          dispatch({ type: NETWORK_ERROR, error });
          throw new Error(error);
        }
      );
}
