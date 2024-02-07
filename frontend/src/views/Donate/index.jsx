<<<<<<< HEAD
import "./index.css";
import Header from "../../components/Header";
import venmo from "../../assets/images/venmo.webp";
import paypal from "../../assets/images/paypal.webp";

const index = () => {
  return (
    <section className="donate">
      <Header title="Every bit helps" />
      <div className="container">
        <p className="span-width">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque itaque
          voluptas deserunt labore libero. Id similique aperiam provident et
          accusantium laboriosam, numquam sint sapiente ducimus velit.
          Doloremque pariatur aperiam dolores.
        </p>
        <a href="https://account.venmo.com/u/BunnAgain" target="_blank" rel="noopener noreferrer">
          <img src={venmo} alt="qr code to bunnagain venmo" />
        </a>
        <img src={paypal} alt="qr code to bunnagain paypal" />
      </div>
    </section>
  );
};
=======
import './index.css'
import Header from "../../components/Header"
import Button from "../../components/Button"
import placeholder from '../../assets/images/placeholder-image.webp'

const index = () => {
  return (
    <section className='donate'>
      <Header title="Donate"/>
      <div className="container">
        <p className="grid-item">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci perspiciatis debitis ab repudiandae tempore, accusantium, fuga nostrum pariatur nihil, voluptate ipsum voluptates quas ad officiis dolores nisi deleniti minima quis!
        </p>
          <div className="options grid-item">
            <img src={placeholder} alt="" />
            <Button text="Amazon Smile"/>
          </div>
          <div className="options grid-item">
            <img src={placeholder} alt="" />
            <Button text="Venmo"/>
          </div>
          <div className="options grid-item">
            <img src={placeholder} alt="" />
            <Button text="Paypal"/>
          </div>
      </div>
    </section>
  )
}
>>>>>>> 9aa1a8eba4115dd8dd59ee08cddeeadaa82fe6c3

export default index;
