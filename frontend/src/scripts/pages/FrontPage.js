import React from 'react';
import CounterValue from '../components/CounterValue';
import CounterControls from '../components/CounterControls';

class FrontPage extends React.Component {
  render() {
    return (
      <div className="front-page">
        FrontPage
        <CounterValue />
        <CounterControls />
      </div>
    );
  }
}

export default FrontPage;
