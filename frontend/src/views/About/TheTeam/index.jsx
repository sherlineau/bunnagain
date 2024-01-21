import "./index.css";
import placeholder from '../../../assets/images/placeholder-image.webp'

const data = [
  {
    id: 1,
    name: "Donna Rome",
    position: "President",
    img: placeholder,
    desc: "President Donna Rome has been rescuing rabbits since 2012. Founded in 2015, BunnAgain Rabbit Rescue strives to rehabilitate and re-home neglected and abandoned rabbits while promoting responsible ownership for the often misunderstood animals.",
  },
  {
    id: 2,
    name: "Donna Rome",
    position: "President",
    img: placeholder,
    desc: "President Donna Rome has been rescuing rabbits since 2012. Founded in 2015, BunnAgain Rabbit Rescue strives to rehabilitate and re-home neglected and abandoned rabbits while promoting responsible ownership for the often misunderstood animals.",
  },
];

const index = () => {
  return (
    <section className="meet-the-team">
      <h1 className="header">Meet the Team</h1>
      <div className="container">
        {data.map((item, index) => {
          return (
            <div className="card" key={index}>
              <div className="profile-img">
                <img src={`${item.img}`} alt="" />
              </div>
              <h2>{item.name}</h2>
              <h3>{item.position}</h3>
              <p>
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default index;
