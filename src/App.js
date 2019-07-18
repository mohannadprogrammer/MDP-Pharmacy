import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Routes from "./router"
function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>

  );
}

export default App;
