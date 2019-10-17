import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div className="App">
        <Wrapper>
          <Route exact path="/" component={Main} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
