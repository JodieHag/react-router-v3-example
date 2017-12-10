import React from 'react';
import PropTypes from 'prop-types';

const AdoptaLayout = props => (
  <div className="container">
    <div className="row">
      <div className="col m12">
        <h4>¡Adoptanos!</h4>
        <p>No compres, adopta</p>
        {props.children}
      </div>
    </div>
  </div>
);

export default AdoptaLayout;

AdoptaLayout.propTypes = {
  children: PropTypes.object.isRequired
};
