import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';

import logo from './logo.svg';
import './App.css';
import { getStore } from './framework/redux';

const history = createBrowserHistory();
const store = getStore(history);

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              Learn React
            </a>
          </header>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
