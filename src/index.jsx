import './sass/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './js/components/App';
import ContentPage from './js/components/ContentPage';
import reducers from './js/reducers';

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(ReduxPromise),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/content" component={ContentPage} />
      <Route path="*" component={App} />
    </Router>
  </Provider>
  , document.getElementById('container'));
