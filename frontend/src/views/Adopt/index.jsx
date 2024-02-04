import { Link } from "react-router-dom";
import "./index.css";
import placeholder from "../../assets/images/placeholder-image.webp";

const index = () => {
  return (
    <section className="adopt">
      <h1 className="header">Adopt a Rabbit</h1>
      <div className="container">
        <img src={placeholder} alt="" className="grid-item" />

        <div className="policies grid-item">
          <h2>Our Policies</h2>

          <p>BunnAgain adheres to these general polices to  ensure the welfare of our rabbits to the best of our ability, even after they have left our care. It is due to our deep commitment in developing responsible and informed caretakers that we must occasionally deny adoption or foster applications.</p>

          <ul>
            <li>Maintain contact once a week for the first month</li>
            <li>Rabbits are to be kept indoor or under <span className="emphasis">close supervision</span> in an outdoor exercise pen</li>
            <li>Any rabbit fostered, adopted or trial run may be returned at any time</li>
            <li>Swapped rabbits must be in acceptable condition in relation to an acceptable home environment</li>
          </ul>
        </div>

        <div className="options">
          <img src={placeholder} alt="" />
          <button className="button">Available Rabbits</button>
        </div>

        <div className="options">
          <img src={placeholder} alt="" />
          <button className="button">Learn Before You Leap</button>
        </div>

        <div className="options">
          <img src={placeholder} alt="" />
          <button className="button">Application</button>
        </div>
      </div>
    </section>
  );
};

export default index;
