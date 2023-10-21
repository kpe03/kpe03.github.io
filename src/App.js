import React from 'react';
import {
  BrowserRouter as Router,
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './components/Home';
import { Resume } from './components/Resume';

const App = () => (
    <HashRouter>
      <React.Fragment>
        <Routes>
          <Route path="/resume" element={<Resume />}> </Route>
          <Route path="/" element={<Home/>}>
          </Route>
        </Routes>
      </React.Fragment>
    </HashRouter>
  );

export default App;
