import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route } from 'react-router-dom';
import PageLanding from './components/PageLanding';
import MainApplication from './components/MainApplication';

function App() {
  const token = ''
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/(|home|register)" component={PageLanding} />
        <Route path="/app" token={token} component={MainApplication} />
      </div>
    </BrowserRouter>
  );
}

export default App;
