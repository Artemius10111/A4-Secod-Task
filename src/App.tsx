import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './views/MainDefault.';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Main />
        </BrowserRouter>
    </div>
  );
}

export default App;
