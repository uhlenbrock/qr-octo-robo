// @flow

import React, { Component } from 'react';
import QrCode from './QrCode';

import './App.css';

class App extends Component {
  renderHeader() {
    return (
      <nav className="navbar navbar-inverse sticky-top bg-primary">
        <div className="container">
          <span className="navbar-brand">QR Octo Robo</span>
          <span className="navbar-text">a library of your QR codes</span>
        </div>
      </nav>
    );
  }

  renderBody() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <QrCode
              value="This is a test value from app"
              size={150}
            />
          </div>
        </div>
      </div>
    );
  }

  renderFooter() {
    return (
      <footer className="footer bg-faded text-muted text-center mt-4 py-4">
        Made with &#x2764; by <a className="text-muted" href="https://twitter.com/ktornwall">@ktornwall</a>
        <strong className="mx-2">&middot;</strong>
        Thanks to <a className="text-muted" href="https://github.com/neocotic/qrious">QRious</a> for QR code generation
        <strong className="mx-2">&middot;</strong>
        <a className="text-muted" href="https://github.com/ktornwall/qr-octo-robo">Get source code</a>
      </footer>
    )
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        {this.renderBody()}
        {this.renderFooter()}
      </div>
    )
  }
}

export default App;
