import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const WhoIs = props => (
  <div className="row">
    <div className="col s12 m12">
      <Link className="pointer" onClick={props.goBack}> <h4><i className="material-icons">undo</i> Ir atrás </h4> </Link>
      <div className="col s12 m12">
        <h2 className="header">Jodie Hag</h2>
        <div className="card horizontal">
          <div className="card-image">
            <img src="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAA1nAAAAJGJmMjllYzJhLTZmZTItNGRjNS05MWU0LTE2YzE2Y2JhNmFiNg.jpg" alt="JodieHag" />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>Soy Judit Sánchez, aka JodieHag. Una FrontEnd Engineer especializada en ReactJs. Soy autónoma, trabajo en remoto y me encanta enseñar lo que sé y que me enseñeis lo que sabeis. ¡Arriba las esponjas de conocimiento!</p>
            </div>
            <div className="card-action">
              <Link to="http://wwww.jodiehag.com" target="_blank">Mi web, por si quieres seguirme</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WhoIs;

WhoIs.propTypes = {
  goBack: PropTypes.func.isRequired
};

WhoIs.defaultProps = {
};
