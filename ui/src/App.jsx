import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import MainRoutes from './routes/main';
import './App.css';

const App = () => {

  return (
    <Router>
      <Navbar bg="dark" variant="dark" className="text-white">
        User Log
      </Navbar>
      <MainRoutes />
    </Router>
  );
}

export default App;
