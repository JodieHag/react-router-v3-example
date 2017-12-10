import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const DeGats = props => (
  <div className="row">
    <div className="col s12 m12">
      <Link className="pointer" onClick={props.goBack}> <h4><i className="material-icons">undo</i> Ir atrás </h4> </Link>
      <div className="col s12 m12">
        <h2 className="header">DeGats</h2>
        <div className="card horizontal">
          <div className="card-image">
            <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=171x96:format=jpg/path/s00098bae46f9d585/logo/version/1486935767/image.jpg" alt="DeGats" />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>DeGats son un grupo de personas preocupadas por el bienestar de los gatos.
              Se dedican a cuidar de ellos, haciendo control de colonias de la calle,
              rescatando cachorros y adultos sociables para darlos en adopción y
              que tengan una segunda oportunida. Están en Barcelona.</p>
            </div>
            <div className="card-action">
              <Link to="https://www.degats.org" target="_blank">Mira su web para saber más sobre ellos.</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DeGats;

DeGats.propTypes = {
  goBack: PropTypes.func.isRequired
};
