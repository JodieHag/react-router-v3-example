import React from 'react';
import { browserHistory } from 'react-router';
import WhoIs from './WhoIs';

class WhoIsContainer extends React.Component {

  static goBack() {
    browserHistory.goBack();
  }

  constructor(props) {
    super(props);

    this.goBack = WhoIsContainer.goBack.bind(this);
  }

  render() {
    return (
      <WhoIs
        goBack={this.goBack}
      />
    );
  }
}

export default WhoIsContainer;
