import React from 'react';

import Navigation from './Navigation';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navigation />
        <div className="content-area">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;