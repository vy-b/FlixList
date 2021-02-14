import TestComponent from "./Components/TestComponent"
import MovieAPI from "./Components/MovieAPI"
import { SignUpView } from "./Components/SignUpView"
import './App.css'
import TopNavView from "./Components/TopNavView"
function App() {
  return(
  <div className="App">
    <header className="App-header">
    <TestComponent />
    <MovieAPI />
    <SignUpView/>
    <TopNavView />
    </header>
  </div>
  )
}

export default App;
