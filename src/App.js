import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './components/LandingPage';
import Default from './components/Default';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return(
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />        
        <Route path="/about" component={About} />        
        <Route path="/contact" component={Contact} />
        <Route component={Default} />
      </Switch>      
    </>
  )
}

export default App;