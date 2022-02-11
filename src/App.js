import Intro from "./components/Intro";
import Aboutme from "./components/Aboutme";
import Skill from "./components/Skill";
import Nav from "./components/Nav";
import './App.css';

import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="nav-bar">
          <Nav />
        </div>
          <Routes>
            <Route path = "" element = {<Intro />} />
            <Route path="/home" element = {<Intro />} />
            <Route path="/about" element = {<Aboutme />} />
            <Route path="/skills" element = {<Skill />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
