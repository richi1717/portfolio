import { combineReducers } from 'redux';
import selected from './reducer_selected';
import overlay from './reducer_overlayContent';

const rootReducer = combineReducers({
  selected,
  overlay
});

export default rootReducer;
