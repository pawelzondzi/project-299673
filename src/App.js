import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Routing} from "./Routing";
import {Menu} from "./components/Menu";
import Header from "./components/Header"

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Menu/>
        <Routing/>
      </Router>
    </div>
  );
}

export default App;
