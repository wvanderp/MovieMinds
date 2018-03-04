import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';

import reducers from './reducers/reducers'

import App from './app'


class Index extends React.Component {
  constructor() {
    super();
    this.store = createStore(reducers, {}, composeWithDevTools());
  }


  render() {

    return (
      <Provider store={this.store}>
        <App />
      </Provider>

    )
  }
}

render(<Index />, document.getElementById('app'));
