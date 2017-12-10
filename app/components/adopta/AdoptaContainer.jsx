import React from 'react';
import Adopta from './Adopta';
import data from './adopta.json';

require('./adopta.scss');

const AdoptaContainer = () => (
  <Adopta
    data={data.data}
  />
);

export default AdoptaContainer;
