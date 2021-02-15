import './App.css'
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import TopNavView from "./Components/TopNavView"
import TestComponent from "./Components/TestComponent"
import MovieAPI from "./Components/MovieAPI"
import { SignUpView } from "./Components/SignUpView"

function App() {
    return(
      <React.Fragment>
        <Router>
          <TopNavView />
          <Switch>
            <Route exact path="/" component={TestComponent} />
            <Route exact path="/SignUp" component={SignUpView} />
            <Route exact path="/Search" component={MovieAPI} />
          </Switch>
        </Router>
      </React.Fragment>
    )
}

export default App;