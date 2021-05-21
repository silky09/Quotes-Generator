import React from 'react'
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Quotes from './components/Quotes/Quotes'
import Music from './components/Music/Music'
import Games from './components/Games/Games'
// import Covid19 from './components/Covid19/Covid19';
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
          {/* <Route exact path='/covid19' component={Covid19} /> */}
          <Redirect to="/" />
        </Switch>
      </Router>
      
      
    </>
  );
}

export default App;
