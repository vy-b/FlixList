import TestComponent from "./Components/TestComponent"
import MovieAPI from "./Components/MovieAPI"
import { SignUpView } from "./Components/SignUpView"
import './App.css'
function App() {
  return(
  <div className="App">
    <header className="App-header">
    <TestComponent />
    <MovieAPI />
    <SignUpView/>
    </header>
  </div>
  )
}

export default App;
