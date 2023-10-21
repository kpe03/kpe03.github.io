import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './components/Home';
import { Resume } from './components/Resume';

const App = () => (
    <Router>
      <React.Fragment>
        <Routes>
          <Route path="/resume" element={<Resume />}> </Route>
          <Route path="/" element={<Home/>}>
          </Route>
        </Routes>
      </React.Fragment>
    </Router>
  );

export default App;
