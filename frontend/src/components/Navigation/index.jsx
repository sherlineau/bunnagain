import "./index.css";
import { Link } from 'react-router-dom'
import logo from '../../assets/placeholder.webp'

const index = () => {
  return (
      <div className="container">
        <img src={logo} alt="" className="logo"/>
        <nav className="navbar">
          <div className="nav-item dropdown">
            About
            <div className="dropdown-content">
              <Link to="/about-bunnagain" className="dropdown-item">Our Story</Link>
              <Link to="/meet-the-team" className="dropdown-item">Meet the Team</Link>
              <Link to="/faq" className="dropdown-item">FAQ</Link>
            </div>
          </div>
          <div className="nav-item">
            <Link to="/adopt">Adopt</Link>
          </div>
          <div className="nav-item">
            <Link to="/admissions">Admissions</Link>
          </div>
          <div className="nav-item">
            <Link to="/get-involved">Get Involved</Link>
          </div>
          <div className="nav-item">
            <Link to="/donate">Donate</Link>
          </div>
          <div className="nav-item">
            <Link to="/news">News</Link>
          </div>
          <div className="nav-item">
            <Link to="/resources">Resources</Link>
          </div>
          <div className="nav-item">
            <Link to="/contact">Contact Us</Link>
          </div>
        </nav>
      </div>
  )
}; 

export default index;
