import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About-us';
import Investors from './pages/Investors';
import Contacts from './pages/Contact-us';
import Login from './pages/Login';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Investors" element={<Investors />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;