import { THUMB_CARD_CHOSEN } from './big-card-actions';

export default function (state = null, action) {
  switch (action.type) {
    case THUMB_CARD_CHOSEN:
      return action.val;
    default:
}

  return state;
}
