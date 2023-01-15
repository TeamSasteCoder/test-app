import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';

import Home from './Components/Home'
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Router basename="/">

        {/* Add Menu Component */}
        <Navbar />
        
        <Switch> 
          <Route exact path="/" Component={Home}/>
          <Route path="/Home" Component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Contact" component={Contact}/>

          
        </Switch>
      </Router>

    </div>
  );
}

export default App;