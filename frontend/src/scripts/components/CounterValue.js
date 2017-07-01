import React from 'react';
import { connect } from 'react-redux';

class CounterValue extends React.Component {
  render() {
    return <div>{this.props.counter}</div>;
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(CounterValue);
