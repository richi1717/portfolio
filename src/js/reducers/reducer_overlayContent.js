import * as types from '../constants/action_types';

export default function(state = { content: null }, action) {
  switch (action.type) {
    case types.GET_OVERLAY_CONTENT: {
      return { ...state, content: action.payload };
    }
    default: {
      return state;
    }
  }
}
