import "./index.css";
import { FaFacebook } from "react-icons/fa";
import Button from '../Button'

const index = () => {
  return (
    <div className="footer container">
      <Button text="Donate" />
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
