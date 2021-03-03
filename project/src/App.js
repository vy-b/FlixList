import './App.css'
import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import TopNavView from "./Components/TopNavView"
import TestComponent from "./Components/TestComponent"
import SearchController from "./Components/MovieSearch/SearchController"
import SignUpController from "./Components/SignUp/SignUpController"
import LoginController from "./Components/Login/LoginController"
import ProfileTabController from "./Components/ProfileTab/ProfileTabController"

function App() {
  const [username,setUsername] = useState('')
  return(
    <React.Fragment>

      <Router>
        <TopNavView />
        <Switch>
          <Route exact path="/" component={TestComponent} />
          <Route exact path="/SignUp" component={SignUpController} />
          <Route exact path="/Login">
            <LoginController setUsername={setUsername}/>
          </Route>
          <Route exact path="/Profile">
            <ProfileTabController username={username}/>
          </Route>
          <Route exact path="/Search" component={SearchController} />
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App;