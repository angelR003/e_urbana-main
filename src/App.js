// App.js
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Estadisticas from './pages/estadisticas'; 
import Easter  from './pages/easter';
import Nosotros from './pages/nosotros';
import Timeline from './nosotros/historia/timeline';




function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/estadisticas" element={<Estadisticas />} /> 
          <Route path = "/easter" element = {<Easter/>} />
          <Route path= "/nosotros" element = {<Nosotros/>} /> 
          <Route path ="/timeline" element = {<Timeline/>}/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
