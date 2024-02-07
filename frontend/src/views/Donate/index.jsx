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

export default index;
