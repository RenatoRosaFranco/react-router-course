import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Home       from  './components/Home';
import About      from  './components/About';
import Contact    from  './components/Contact';
import Error      from  './components/Error';
import Navigation from  './components/Navigation';
import Project    from  './components/Project';
import PersonList from  './components/PersonList';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/about' component={About}/>
            <Route path='/project/:id' component={Project}/>
            <Route path='/membros' component={PersonList}/>
            <Route path='/contact' component={Contact}/>
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
