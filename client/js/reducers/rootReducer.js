import _assign from 'lodash.assign';

export const defaults = {
  content: '',
  showHeader: false
};

export default function rootReducer(state = defaults, action) {
  switch (action.type) {
    case 'SET_OVERLAY_CONTENT':
      return _assign({}, state, {
        content: action.content
      });
    case 'SHOW_HEADER':
      return _assign({}, state, {
        showHeader: true
      });
    case 'HIDE_HEADER':
      return _assign({}, state, {
        showHeader: false
      });
    default:
      return state;
  }
}

