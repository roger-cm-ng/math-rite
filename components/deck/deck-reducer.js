import { AUTHENTICATED } from './deck-actions';

const initialState = {
  data: {}
}

export default function (state = null, action) {
  switch (action.type) {
    case THUMB_CARD_CHOSEN:
      return action.val;
    default:
}

  return state;
}
