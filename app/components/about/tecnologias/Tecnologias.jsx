import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const Tecnologias = props => (
  <div className="row">
    <div className="col s12 m12">
      <Link className="pointer" onClick={props.goBack}> <h4><i className="material-icons">undo</i> Ir atrás </h4> </Link>
      <div className="col s12 m6">
        <h2 className="header">Tecnologias</h2>
        <p>Os dejo las urls oficiales de cada tecnología</p>
        <div className="collection">
          <Link to="https://reactjs.org/" className="collection-item" target="_blank">React</Link>
          <Link to="https://github.com/ReactTraining/react-router/tree/v3" className="collection-item" target="_blank">React-Router v3</Link>
          <Link to="https://webpack.js.org/" className="collection-item" target="_blank">Webpack</Link>
          <Link to="https://facebook.github.io/jsx/" className="collection-item" target="_blank">Jsx</Link>
          <Link to="http://sass-lang.com/" className="collection-item" target="_blank">Sass</Link>
          <Link to="http://materializecss.com/" className="collection-item" target="_blank">Materialize-css</Link>
        </div>
      </div>
    </div>
  </div>
);

export default Tecnologias;

Tecnologias.propTypes = {
  goBack: PropTypes.func.isRequired
};
