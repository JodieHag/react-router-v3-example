import React from 'react';
import { browserHistory } from 'react-router';
import Tecnologias from './Tecnologias';

class TecnologiasContainer extends React.Component {

  static goBack() {
    browserHistory.goBack();
  }

  constructor(props) {
    super(props);

    this.goBack = TecnologiasContainer.goBack.bind(this);
  }

  render() {
    return (
      <Tecnologias
        goBack={this.goBack}
      />
    );
  }
}

export default TecnologiasContainer;
