import "./index.css";
import { FaFacebook } from "react-icons/fa";

const index = () => {
  return (
    <div className="footer container">
      <button className="donate">Donate</button>
      <div className="socials">
        <a href="https://www.facebook.com/BunnAgain/" target="__blank" className="social-icons"><FaFacebook/></a>
        {/* <a href="">svg</a>
        <a href="">svg</a>
        <a href="">svg</a>
        <a href="">svg</a> */}
      </div>
      <p>Paradis, Lousiana | <a href="mailto:bunnagain@gmail.com">bunnagain@gmail.com</a></p>
      
    </div>
  );
};

export default index;
