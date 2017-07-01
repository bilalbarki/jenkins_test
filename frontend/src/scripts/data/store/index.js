import { compose, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        thunk,
        routerMiddleware(browserHistory),
        createLogger() // You might want to allow this only in development environment
      ),

      // Adds support for Redux DevTools
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
};
