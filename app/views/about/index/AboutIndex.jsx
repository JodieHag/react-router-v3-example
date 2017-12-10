import React from 'react';
import { Link } from 'react-router';

const AboutIndex = () => (
  <div className="container">
    <div className="row">
      <div className="col m12">
        <ul>
          <li> <Link to="about/vamos-por-faena"> <p>¿Con que tecnologías se ha desarrollado esto?</p> </Link></li>
          <li> <Link to="about/me-han-entrado-ganas-de-adoptar"> <p>¿De donde salen estos gatitos tan monos?</p> </Link></li>
          <li> <Link to="about/quien-es-la-freak"><p>¿Quién ha hecho esto?</p> </Link></li>
        </ul>
      </div>
    </div>
  </div>
);

export default AboutIndex;
