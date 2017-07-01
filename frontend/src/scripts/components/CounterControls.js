import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../data/actions/counter';

class CounterControls extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  };
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(CounterControls);
