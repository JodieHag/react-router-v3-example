import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

import Layout from './views/Layout';
import NotFound from './views/NotFound';
import HomeIndex from './views/home/HomeIndex';
import AdoptaLayout from './views/adopta/AdoptaLayout';
import AdoptaIndex from './views/adopta/index/AdoptaIndex';
import AboutLayout from './views/about/AboutLayout';
import AboutIndex from './views/about/index/AboutIndex';

import AdoptaDetalleContainer from './components/adopta/adoptaDetalle/AdoptaDetalleContainer';
import WhoIsContainer from './components/about/whoIs/WhoIsContainer';
import DeGatsContainer from './components/about/deGats/DeGatsContainer';
import TecnologiasContainer from './components/about/tecnologias/TecnologiasContainer';

const App = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={HomeIndex} />
      <Route path="adopta" component={AdoptaLayout}>
        <IndexRoute component={AdoptaIndex} />
        <Route path=":id" component={AdoptaDetalleContainer} />
      </Route>
      <Route path="about" component={AboutLayout}>
        <IndexRoute component={AboutIndex} />
        <Route path="quien-es-la-freak" component={WhoIsContainer} />
        <Route path="me-han-entrado-ganas-de-adoptar" component={DeGatsContainer} />
        <Route path="vamos-por-faena" component={TecnologiasContainer} />
      </Route>
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
