import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import counter from './counter';

/*
  Our app's root reducer is created by combining all reducers.

  This is actually how our app state looks like. A key in the object above
  will eventually get values from the associated reducer. Destructuring
  helps in keeping module names and key names the same.

  Note that initial values come directly from reducer's initial values.
*/
export default combineReducers({
  counter,
  routing: routerReducer
});
