import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './components/Home';
import { Resume } from './components/Resume';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Routes>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
      </React.Fragment>
    </Router>
  );
}

export default App;
