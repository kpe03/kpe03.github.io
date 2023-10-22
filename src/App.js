import React from 'react';
import {
  BrowserRouter as Router,
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './components/Home';
import { Resume } from './components/Resume';
import {Projects } from './components/Projects';

const App = () => (
    <HashRouter>
      <React.Fragment>
        <Routes>
          <Route path="/resume" element={<Resume />}> </Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
        </Routes>
      </React.Fragment>
    </HashRouter>
  );

export default App;
