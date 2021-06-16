import React from "react"
import './App.css';
import LoginPage from './Components/LoginPage';
import Navbar from "./Components/layouts/Navbar"
import { Switch, BrowserRouter, Route } from "react-router-dom"
import SignupPage from "./Components/SignupPage";


const Routing = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
    </Switch>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
