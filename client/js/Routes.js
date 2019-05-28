import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';
import Arrangement from './components/Arrangement';
import ContentPage from './components/ContentPage';
import * as config from './constants/config';

export default function Routes(props) {
  const { store } = props;

  return (
    <BrowserRouter>
      <App state={store} location={location}>
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
            path="/about"
            render={routeProps => (
              <ContentPage
                content={config.aboutMe.content}
                contentType="about"
                history={routeProps.history}
              />
            )}
          />
          <Route
            exact
            path="/skills"
            render={routeProps => (
              <ContentPage
                content={config.skills.content}
                contentType="skills"
                history={routeProps.history}
              />
            )}
          />
          <Route
            exact
            path="/work"
            render={routeProps => (
              <ContentPage
                content={config.work.content}
                contentType="work"
                history={routeProps.history}
              />
            )}
          />
          <Route
            exact
            path="/projects"
            render={routeProps => (
              <ContentPage
                content={config.projects.content}
                contentType="projects"
                history={routeProps.history}
              />
            )}
          />
          <Route
            exact
            path="/references"
            render={routeProps => (
              <ContentPage
                content={config.references.content}
                contentType="references"
                history={routeProps.history}
              />
            )}
          />
          <Route
            exact
            path="/contact"
            render={routeProps => (
              <ContentPage
                content={config.contact.content}
                contentType="contact"
                history={routeProps.history}
              />
            )}
          />
          <Route
            exact
            path="/education"
            render={routeProps => (
              <ContentPage
                content={config.education.content}
                contentType="education"
                history={routeProps.history}
              />
            )}
          />
          <Route
            exact
            path="/music"
            render={routeProps => (
              <ContentPage
                content={config.music.content}
                contentType="music"
                history={routeProps.history}
              />
            )}
          />
          <Route
            exact
            path="/military"
            render={routeProps => (
              <ContentPage
                content={config.military.content}
                contentType="military"
                history={routeProps.history}
              />
            )}
          />
          <Route
            exact
            path="/demo"
            render={routeProps => (
              <ContentPage
                content={config.demo.content}
                contentType="demo"
                history={routeProps.history}
              />
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
