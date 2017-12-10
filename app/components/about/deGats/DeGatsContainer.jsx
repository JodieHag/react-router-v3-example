import React from 'react';
import { browserHistory } from 'react-router';
import DeGats from './DeGats';

class DeGatsContainer extends React.Component {

  static goBack() {
    browserHistory.goBack();
  }

  constructor(props) {
    super(props);

    this.goBack = DeGatsContainer.goBack.bind(this);
  }

  render() {
    return (
      <DeGats
        goBack={this.goBack}
      />
    );
  }
}

export default DeGatsContainer;
