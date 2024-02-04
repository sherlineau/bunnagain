import "./index.css";
import Header from "../../components/Header";
import Button from "../../components/Button";
import placeholder from "../../assets/images/placeholder-image.webp";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <section className="involved">
      <Header title="Want to get involved?" />
      <div className="container">
        <img src={placeholder} alt="" />
        <div className="grid-item">
          <h1>Become a Volunteer!</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            nemo cupiditate animi voluptatum aperiam. Mollitia vero, expedita
            cupiditate natus ducimus quidem consequuntur, consequatur aut
            repudiandae excepturi vel recusandae aspernatur assumenda?
          </p>
          <div className="text-center">
            <Link to="/application" className="text-center">
              <Button text="Contact Us" />
            </Link>
          </div>
        </div>
        <img src={placeholder} alt="" />
        <div className="grid-item">
          <h1>Join the foster family!</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            nemo cupiditate animi voluptatum aperiam. Mollitia vero, expedita
            cupiditate natus ducimus quidem consequuntur, consequatur aut
            repudiandae excepturi vel recusandae aspernatur assumenda?
          </p>
          <div className="text-center">
            <Link to="/contact" className="text-center">
              <Button text="Apply Today" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
