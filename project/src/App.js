import './App.css'
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import TopNavView from "./Components/TopNavView"
import TestComponent from "./Components/TestComponent"
import SearchController from "./Components/SearchController"
import SignUpController from "./Components/SignUpController"

function App() {
  return(
    <React.Fragment>

      <Router>
        <TopNavView />
        <Switch>
          <Route exact path="/" component={TestComponent} />
          <Route exact path="/SignUp" component={SignUpController} />
          <Route exact path="/Search" component={SearchController} />
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App;