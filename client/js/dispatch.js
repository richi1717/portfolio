let dispatch = () => {
  throw new Error('dispatch not initialized');
};

let reduxGetState = () => {
  throw new Error('getState not initialized');
};

export function initializeDispatch(store) {
  dispatch = store.dispatch;
  reduxGetState = store.getState;
}

export default action => {
  dispatch(action);
};

export const getState = () => reduxGetState();
