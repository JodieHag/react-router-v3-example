import React from 'react';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';
import data from '../adopta.json';
import AdoptaDetalle from './AdoptaDetalle';

class AdoptaDetalleContainer extends React.Component {

  static goBack() {
    browserHistory.goBack();
  }

  constructor(props) {
    super(props);

    this.state = {
      detail: {}
    };

    this.goBack = AdoptaDetalleContainer.goBack.bind(this);
  }
  componentDidMount() {
    this.handlerDetail();
  }

  handlerDetail() {
    for (let i = 0; i < data.data.length; i += 1) {
      if (data.data[i].id === this.props.params.id) {
        this.setState({
          detail: data.data[i]
        });
      }
    }
  }

  render() {
    const { detail } = this.state;
    return (
      <AdoptaDetalle
        detail={detail}
        goBack={this.goBack}
      />
    );
  }
}

export default AdoptaDetalleContainer;

AdoptaDetalleContainer.propTypes = {
  params: PropTypes.object.isRequired
};
