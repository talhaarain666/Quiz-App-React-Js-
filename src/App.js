import './App.css';
import React from 'react';
import Home from './Home';
import Admin from './admin/Admin';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {





  return (<>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />

      </Routes>

    </Router>

  </>
  );
}




export default App;
