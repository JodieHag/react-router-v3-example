import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const AdoptaDetalle = props => (
  <div className="row">
    <div className="col s12 m12">
      <Link className="pointer" onClick={props.goBack}> <h4><i className="material-icons">undo</i> Ir atrás </h4> </Link>
      <div className="card">
        <div className="card-image">
          <img src={props.detail.photo} alt="adoptame" />
          <span className="card-title">{props.detail.name}</span>
        </div>
        <div className="card-content">
          <p className="card-description">{props.detail.description}</p>
        </div>
      </div>
    </div>
  </div>
);

export default AdoptaDetalle;

AdoptaDetalle.propTypes = {
  detail: PropTypes.object,
  goBack: PropTypes.func.isRequired
};

AdoptaDetalle.defaultProps = {
  detail: {}
};
