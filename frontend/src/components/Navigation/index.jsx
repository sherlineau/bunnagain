import "./index.css";
import { Link } from 'react-router-dom'
import logo from '../../assets/placeholder.webp'

const index = () => {
  return (
      <div className="container">
        <Link to="/" className="logo">
          <img src={logo} alt="" />
        </Link>
        <nav className="navbar">

          <div className="dropdown">
            About
            <div className="dropdown-content">
              <Link to="/about-bunnagain" className="dropdown-item nav-item">Our Story</Link>
              <Link to="/meet-the-team" className="dropdown-item nav-item">Meet the Team</Link>
              <Link to="/faq" className="dropdown-item nav-item">FAQ</Link>
            </div>
          </div>

            <Link to="/adopt" className="nav-item">Adopt</Link>
            <Link to="/admissions" className="nav-item">Admissions</Link>
            <Link to="/get-involved" className="nav-item">Get Involved</Link>
            <Link to="/donate" className="nav-item">Donate</Link>
            <Link to="/news" className="nav-item">News</Link>
            <Link to="/resources" className="nav-item">Resources</Link>
            <Link to="/contact" className="nav-item">Contact Us</Link>
        </nav>
      </div>
  )
}; 

export default index;
