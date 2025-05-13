// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Signin from './pages/Signin';

//import Planet from './pages/Planet';
//import Stars from './pages/Stars';
//import SolarSystem from './pages/SolarSystem';
//import Galaxy from './pages/Galaxy';
//import BlackHole from './pages/BlackHole';


function App() {
  return (
    <Router>
       <Navbar />
       
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Signin />} />

        
      </Routes>
    </Router>
  );
}

export default App;
