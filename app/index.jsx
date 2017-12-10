import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

import Layout from './views/Layout';
import NotFound from './views/NotFound';
import HomeIndex from './views/HomeIndex';
import AdoptaLayout from './views/AdoptaLayout';

import AdoptaContainer from './components/adopta/AdoptaContainer';
import AdoptaDetalleContainer from './components/adopta/adoptaDetalle/AdoptaDetalleContainer';

export default class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={HomeIndex} />
          <Route path="adopta" component={AdoptaLayout}>
            <IndexRoute component={AdoptaContainer} />
            <Route path=":id" component={AdoptaDetalleContainer} />
          </Route>
        </Route>
        <Route path="*" component={NotFound} />
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
