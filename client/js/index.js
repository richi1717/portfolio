import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { initializeDispatch } from './dispatch';
import rootReducer from './reducers/rootReducer';
import Routes from './Routes';

import App from './components/App';
import ContentPage from './components/ContentPage';

Object.defineProperty(window, 'isProd', {
  value: process.env.NODE_ENV === 'production'
});

// eslint-disable-next-line import/prefer-default-export
export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    process.env.NODE_ENV !== 'production' && window.devToolsExtension
      ? window.devToolsExtension()
      : f => f
  )
);

const render = () => {
  ReactDOM.render(
    <div>
      <Routes store={store.getState()} />
    </div>,
    document.getElementById('container')
  );
};

initializeDispatch(store);

render();
store.subscribe(render);
