import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route } from 'react-router-dom';
import PageLanding from './components/PageLanding';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={PageLanding} />
        {/* <Route path="/app" component={MainApplication} /> */}
        <NavBar />
      </div>
    
    </BrowserRouter>
  );
}

export default App;
