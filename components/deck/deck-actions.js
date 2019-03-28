import Resources from '../helpers/resources';

export const AUTHENTICATED = 'AUTHENTICATED';

export const authenticate = pin => (/* dispatch */) => Resources.auth(
    {
      body: { pin },
      success: (data) => {
        console.log(data);
      },
      fail: (error) => {
        console.log(error.status, '|', error.message);
      }
    }
  );
