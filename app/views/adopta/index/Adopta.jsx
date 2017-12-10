import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const Adopta = props => (
  <div className="row">
    {props.data.map((item) => {
      return (
        <div key={item.id} className="col s12 m4 left">
          <div className="card">
            <div className="card-image">
              <img src={item.photo} alt="adoptame" />
              <span className="card-title">{item.name}</span>
              <Link className="btn-floating halfway-fab waves-effect waves-light red" to={`/adopta/${item.id}`}><i className="material-icons">add</i></Link>
            </div>
            <div className="card-content">
              <p className="card-description">{item.description}</p>
            </div>
          </div>
        </div>
      );
    })}
  </div>
);

export default Adopta;

Adopta.propTypes = {
  data: PropTypes.array.isRequired
};
