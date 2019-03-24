import { USER_ROLE_ACQUIRED } from '../initialisation-handler/initialisation-handler-actions';

const initialState = {
  roles: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_ROLE_ACQUIRED: {
      return {
        roles: action.results
      };
    }
    default:
  }
  return state;
}
