import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import Home from "./Pages/index";
import SignIn from "./Pages/SignIn";

function App() {
  return (
    <Router>
      <switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignIn} exact />
      </switch>
    </Router>
  );
}

export default App;
