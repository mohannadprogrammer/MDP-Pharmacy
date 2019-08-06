import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom'
import Routes from "./router"


import {createStore } from 'redux'
import {Provider } from 'react-redux'
import rootReducer from './reducer'


const store = createStore(rootReducer)
function App() {
  return (
    <Provider store={store}>
      <div className="main">
      <HashRouter>
        <Routes />
      </HashRouter>
      s</div>
    </Provider>
    

  );
}

export default App;
