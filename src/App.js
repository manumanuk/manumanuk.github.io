import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar'
import HomePage from './components/homePage'
import AboutPage from './components/aboutPage'
import NotFoundPage from './components/notFoundPage'
import HardwarePage from './components/hardwarePage';
import SoftwarePage from './components/softwarePage';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <div className="App">
        <Switch>
            <Route strict exact path="/" component={ HomePage } />
            <Route path="/about" component={ AboutPage } />
            <Route exact path="/hardware" component={ HardwarePage } />
            <Route path="/hardware/:elementId" render={(props) => (<HardwarePage {...props}/>) } />
            <Route exact path="/software" component={ SoftwarePage } />
            <Route path="/software/:elementId" render={(props) => (<SoftwarePage {...props}/>) } />
            <Route component={ NotFoundPage } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
