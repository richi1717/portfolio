import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';
import Arrangement from './components/Arrangement';
import ContentPage from './components/ContentPage';

export default function Routes(props) {
  const { store } = props;

  return (
    <BrowserRouter>
      <App state={store} location={location} history={history}>
        <Switch>
          <Route
            exact
            path="/"
            render={routeProps => (
              <Arrangement state={store} history={routeProps.history} />
            )}
          />
          <Route
            exact
            path="/content"
            render={routeProps => (
              <ContentPage state={store} history={routeProps.history} />
            )}
          />
        </Switch>
      </App>
    </BrowserRouter>
  );
}

Routes.propTypes = {
  store: PropTypes.object.isRequired
};
