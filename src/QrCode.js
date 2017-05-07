// @flow

import React, { Component } from 'react';
import QRious from 'qrious';

class QrCode extends Component {
  props: {
    size: number,
    value: string,
  };

  static defaultProps = {
    size: 100,
    value: '',
  };

  componentDidMount() {
    this.update();
  }

  componentDidUpdate() {
    this.update();
  }

  update() {
    if (this.canvas) {
      new QRious({
        element: this.canvas,
        size: this.props.size,
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
