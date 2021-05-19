import React from 'react'
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home/Home'
import Quotes from './components/Quotes'
import Music from './components/Music'
import Games from './components/Games'
import "./App.css"

function App() {
  return (
    <>
     
        <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/quotes' component={Quotes} />
          <Route exact path='/music' component={Music} />
          <Route exact path='/games' component={Games} />
          <Redirect to="/" />
        </Switch>
      </Router>
      
      
    </>
  );
}

export default App;
