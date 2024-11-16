import { Routes, Route, Link } from 'react-router-dom';

import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
const Navbar = () => {
  return (
    <nav>
      <h1>My Portfolio</h1>
      <nav className="nav">

<div className="nav-items-wrapper">
  <Link to="/" className="nav-item">About</Link>
  <Link to="/projects" className="nav-item">Projects</Link>
  <Link to="/contact" className="nav-item">Contact</Link>
 
 
</div>
</nav>
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
     
    </Routes>
    </nav>
  );
};

export default Navbar;
