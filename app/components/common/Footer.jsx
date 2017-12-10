import React from 'react';
import { Link } from 'react-router';

const Footer = () => (
  <footer className="page-footer">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">Aprendiendo React-Router v3</h5>
          <p className="grey-text text-lighten-4">Puedes visitar las webs oficiales si quieres profundizar más en cada una de las tecnologías que estamos utilizando.</p>
        </div>
        <div className="col l4 offset-l2 s12">
          <h6 className="white-text">Estamos usando:</h6>
          <ul>
            <li><Link className="grey-text text-lighten-3" to="#!">React-Router v3</Link></li>
            <li><Link className="grey-text text-lighten-3" to="#!">React</Link></li>
            <li><Link className="grey-text text-lighten-3" to="#!">Webpack</Link></li>
            <li><Link className="grey-text text-lighten-3" to="#!">MaterialCss</Link></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
      © 2017 Judit Sánchez
        <Link
          className="grey-text text-lighten-4 right"
          to="http://www.jodiehag.com"
          rel="noopener noreferrer"
          target="_blank"
        >JodieHag</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
