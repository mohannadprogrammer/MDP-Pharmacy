import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom'
import Routes from "./router"


import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import promiseMiddleWare from 'redux-promise'
import rootReducer from './reducer'

const createStoreWithMiddleware = applyMiddleware(promiseMiddleWare)(createStore)

// const store = createStore(rootReducer)
function App() {
  return (
    <Provider store={createStoreWithMiddleware(rootReducer)}>
      <div className="main">
        <HashRouter>
          <Routes />
        </HashRouter>
        </div>
    </Provider>


  );
}

export default App;
