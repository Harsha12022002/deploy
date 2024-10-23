import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Login from './Login';
import Signup from './Signup';
import { useState } from 'react';
import Pc from './Pc';
import Cart from './Cart'
import Buying from './Buying';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
   
      <Navbar />
  );
}

export default App;
