/*
  Action types are used by action creators when dispatching actions to the store.
  Action types are also used in reducers to catch the dispatched actions.
*/
import {
  INCREMENT,
  DECREMENT
} from '../actionTypes';

/*
  A reducer is a function that takes `state` and `action` as parameters
  and returns the next state that is calculated based on the parameters. 
*/
export default function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
