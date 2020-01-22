import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import AllBooks from "./pages/AllBooks"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path ="/" component={Home} /> 
          <Route exact path ="/saved" component={AllBooks} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
