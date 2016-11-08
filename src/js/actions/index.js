import * as types from '../constants/action_types';

export function setSelectedCard(card) {
  return {
    type: types.GET_CARD_NAME,
    payload: card
  };
}

export function setOverlayContent(content) {
  return {
    type: types.GET_OVERLAY_CONTENT,
    payload: content
  };
}
