import "./index.css";
import placeholder from "../../assets/images/placeholder-image.webp";
import amazon from "../../assets/images/amazon-logo.png";

const index = () => {
  return (
    <section>
      <img src={placeholder} alt="" className="hero-img" />
      <div className="container text-center">
        <div className="hero-content">
          <h2>Welcome to BunnAggain Rabbit Rescue and Education!</h2>
          <p>
            At BunnAgain, we believe that every bunny deserves a happy, healthy
            life. Our mission is to rescue, rehabilitate, and rehome rabbits in
            need, while also educating the community about responsible rabbit
            care.
          </p>

          <p>
            Please note that we are currently at full capacity and are not
            accepting new bunnies. However, we are constantly in need of fosters
            and encourage others to apply to become one. If you have found or
            need to surrender a bunny, please reach out to us, and we will do
            our best to assist you.
          </p>

          <p>
            With your support, we can continue to provide love, shelter, and
            veterinary care to these wonderful animals. Together, we can make a
            difference in the lives of rabbits and the people who love them.
          </p>

          <p>
            Join us in our mission to ensure that every bunny has a hoppy
            ending!
          </p>
        </div>
        <div className="row sub-content">
          <img src={placeholder} className="sub-img" />
          <div className="text-container text-center bg-accent">
            <p>
              Help support our mission to rescue, rehabilitate, and re-home
              rabbits in need by checking out our Amazon wish list!{" "}
            </p>
            <p>
              Your generous donations of supplies like food, toys, and bedding
              directly benefit the bunnies in our care. Every contribution, no
              matter how small, makes a big difference in their lives.
            </p>
            <p>Thank you for your support!</p>

            <a
              href="https://www.amazon.com/hz/wishlist/ls/302YWVLPANUT8?ref_=wl_share"
              target="__blank"
            >
              <img src={amazon} alt="amazon wishlist" className="amz-button" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
