// @flow

import React, { Component } from 'react';
import QRious from 'qrious';

type Props = {
  value: string,
};

class QrCode extends Component {
  props: {
    value: string,
  };

  static defaultProps = {
  };

  componentDidMount() {
    this.update();
  }

  componentDidUpdate() {
    this.update();
  }

  shouldComponentUpdate(nextProps: Props) {
    return Object.keys(QrCode.propTypes).some(
      k => this.props[k] !== nextProps[k]
    );
  }

  update() {
    if (this.canvas) {
      new QRious({
        element: this.canvas,
        value: this.props.value,
      });
    }
  }

  render() {
    return (
      <canvas ref={(canvas) => { this.canvas = canvas; }} />
    );
  }
}

export default QrCode;
