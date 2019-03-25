export const THUMB_CARD_CHOSEN = 'THUMB_CARD_CHOSEN';
export function chooseCard(val) {
  return {
    type: THUMB_CARD_CHOSEN,
    val
  };
}
