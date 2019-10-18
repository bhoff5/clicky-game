import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Main} />
        <Route exact path="/clicky-game" component={Main} />
      </div>
    </Router>
  );
}

export default App;
