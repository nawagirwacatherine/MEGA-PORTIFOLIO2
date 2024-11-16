
import { Routes, Route, Link } from 'react-router-dom';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
const App = () => {
  return (
    <div>
    
      <h1>My Portfolio</h1>
      <nav className="nav">

<div className="nav-items-wrapper">
  
  <Link to="/about" className="nav-item">About</Link>
  <Link to="/projects" className="nav-item">Projects</Link>
  <Link to="/contact" className="nav-item">Contact</Link>
 
 
</div>

    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
     
    </Routes>
    </nav>

    </div>
  );
};

export default App;

