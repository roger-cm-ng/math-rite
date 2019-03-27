import Resources from '../helpers/resources';

export const AUTHENTICATED = 'AUTHENTICATED';

export const authenticate = pin => dispatch => Resources.auth(
    {
      body: { pin },
      success: (data) => {
        dispatch({
          type: AUTHENTICATED,
          data
        });
      },
      fail: (/* error */) => {
        // console.log(error, 'XXX');
      }
    }
  );
