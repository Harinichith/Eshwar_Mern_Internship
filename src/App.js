import logo from './logo.svg';
import './App.css';
import  Form  from 'react-router-dom';
import Home from './home';
import Users from './users';
import About from './about';
import Contact from './contact';
import { BrowserRouter as Router, Route, Routes ,Link} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <nav>
        <Link to="/" style={{margin:"0 150px"}}>Home</Link>
        <Link to="/about" style={{margin:"0 150px"}}>About</Link>
        <Link to="/users" style={{margin:"0 150px"}}>Users</Link>
        <Link to="/contact" style={{margin:"0 150px"}}>Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
