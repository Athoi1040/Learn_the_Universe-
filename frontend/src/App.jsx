// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // ✅ Correctly import the Provider

import Navbar from './components/Navbar';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Signin from './pages/Signin';
import Explore from './pages/Explore';
import Learn from './pages/Learn';
import Footer from './components/Footer';

// Future expansion (optional)
// import Planet from './pages/Planet';
// import Stars from './pages/Stars';
// import SolarSystem from './pages/SolarSystem';
// import Galaxy from './pages/Galaxy';
// import BlackHole from './pages/BlackHole';

function App() {
  return (
    <AuthProvider> {/* ✅ Context wraps all routes/components */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/learn" element={<Learn />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
