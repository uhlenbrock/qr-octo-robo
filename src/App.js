// @flow

import React, { Component } from 'react';
import QrCode from './QrCode';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <QrCode
              value="This is a test value from app"
            />
          </div>
          <div className="col">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
