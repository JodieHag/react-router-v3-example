import React from 'react';
import PropTypes from 'prop-types';

const AboutLayout = props => (
  <div className="container">
    <div className="row">
      <div className="col m12">
        <h4>Aprende sobre este mini proyecto</h4>
        <p>Aquí verás las rutas compuestas (o anidadas).</p>
        {props.children}
      </div>
    </div>
  </div>
);

export default AboutLayout;

AboutLayout.propTypes = {
  children: PropTypes.object.isRequired
};
