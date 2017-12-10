import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

require('../static/scss/App.scss');

const Layout = props => (
  <div className="wrapper">
    <Header />
    <main>
      {props.children}
    </main>
    <Footer />
  </div>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.object.isRequired
};
