import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TopNavView from "./Components/TopNavView"
// import TestComponent from "./Components/TestComponent"
import SearchController from "./Components/MovieSearch/SearchController"
import SignUpController from "./Components/SignUp/SignUpController"
import LoginController from "./Components/Login/LoginController"
import ProfileTabController from "./Components/ProfileTab/ProfileTabController"
import ReviewTabController from './Components/ReviewTab/ReviewTabController'
import BrowseTabController from './Components/BrowseTab/BrowseTabController'

function App() {
  const [username, setUsername] = useState('')
  return (
    <React.Fragment>
      <Router>
        <TopNavView username={username} setUsername={setUsername} />
        <Switch>
          <Route exact path="/">
            { username===''
            ? <LoginController setUsername={setUsername} />
            : <BrowseTabController username={username}></BrowseTabController>
            }
          </Route>
          <Route exact path="/SignUp" component={SignUpController} />
          <Route exact path="/Review">
            <ReviewTabController username={username}/>
          </Route>
          <Route exact path="/Login">
            <LoginController setUsername={setUsername} />
          </Route>
          <Route exact path="/Profile">
            <ProfileTabController username={username} />
          </Route>
          <Route exact path="/Search" component={SearchController} />
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App;