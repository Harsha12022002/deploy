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
    <Router>
      <Navbar />
      <Routes>
        <Route path='/Pc' element={<Pc/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
        <Route path='/' element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path='/sign' element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
        <Route path='/Buying' element={<Buying/>}/>
        <Route path='/home' element={isAuthenticated ? <Home /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
      </Routes>
    </Router>
  );
}

export default App;
