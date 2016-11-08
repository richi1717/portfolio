import * as types from '../constants/action_types';

export default function(state = { selected: null }, action) {
  switch (action.type) {
    case types.GET_CARD_NAME: {
      return { ...state, selected: action.payload };
    }
    default: {
      return state;
    }
  }
}
