import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';


import App from './components/App';
import FrontPage from './pages/FrontPage';
import OtherPage from './pages/OtherPage';
import AnotherPage from './pages/AnotherPage';

import configureStore from './data/store';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const router = (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={FrontPage} />
      <Route path="other-page" component={OtherPage} />
      <Route path="another-page" component={AnotherPage} />
    </Route>
  </Router>
);

const provider = <Provider store={store}>{router}</Provider>;

const el = document.getElementsByClassName('root-container')[0];
ReactDOM.render(provider, el);
