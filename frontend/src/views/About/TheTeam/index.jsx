import "./index.css";
import Header from "../../../components/Header";
import donna from "../../../assets/images/placeholder-image.webp";
import linda from "../../../assets/images/placeholder-image.webp";
import ashton from "../../../assets/images/placeholder-image.webp";
import janene from "../../../assets/images/placeholder-image.webp";

const index = () => {
  return (
    <section className="meet-the-team">
      <Header title="Meet the Team" />
      <div className="container">
        <div className="row">
          <div className="profile-img">
            <img
              src={donna}
              alt="Image of Donna Rome, our founder and president"
            />
          </div>
          <div className="profile-text">
            <h2>Donna Rome</h2>
            <h3>Founder & President</h3>
            <p>
              President Donna Rome has been rescuing rabbits since 2010. In
              2015, she founded BunnAgain Rabbit Rescue, a labor of love
              dedicated to rehabilitating and rehoming neglected and abandoned
              rabbits. Donna is committed to promoting responsible ownership for
              these often misunderstood animals. She offers trial adoptions,
              swaps for the best fit, and provides resources and services to
              current bunny parents. Donna&apos;s focus is on the welfare of house
              rabbits, emphasizing that education is key to preventing tragedy
              for these innocent animals. Natasha Foster, the mother of one of
              Antonia&apos;s friends, is responsible for Donna&apos;s initial involvement
              with rescuing rabbits. Natasha had a handful of dwarf rabbits that
              she couldn&apos;t keep up with, so Donna took them in. This sparked
              Donna&apos;s interest in different breeds and learning more about
              rabbits. She started a collection but realized that she couldn&apos;t
              keep all the rabbits people were giving her, leading to the
              establishment of BunnAgain Rabbit Rescue.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <img src={ashton} alt="" />
            <h2>Ashton Archer</h2>
            <h3>Board Member</h3>
            <p>
              Ashton Archer, a devoted animal enthusiast, found her way to
              BunnAgain through the encouragement of her friend Janene, who
              suggested she adopt a bunny after the passing of her beloved pet,
              Hodor. Currently residing in Houston, TX, Ashton shares her home
              with three bunnies from BunnAgain. Her professional life is
              equally fascinating, as she works as a contractor for NASA,
              specializing as a Thermal Systems Engineer. Outside of her work
              and bunny-filled home, Ashton and her husband care for several
              chinchillas and also serve as foster parents for bunnies in need.
            </p>
          </div>
          <div className="col">
            <img src={linda} alt="" />
            <h2>Linda Nguyen</h2>
            <h3>Digital Media Director</h3>
            <p>
              Linda was invited by her friend Olivia as a plus one to attend a
              lunch for the rescue to reconnect with everyone who loves bunnies,
              has adopted, fostered, and more. It was at this event that she
              first met Donna and her team. Despite never having owned or cared
              for a rabbit before, Linda was immediately drawn in
              everyone&apos;s passion and was invited to Donna&apos;s home to
              meet the rabbits in their care. This experience led to Linda
              fostering her first rabbit, Ralphie, and receiving ample resources
              and support from the rescue to ensure Ralphie&apos;s well-being.
              Since then, Linda has devoted her time to helping the rescue with
              their technical needs, including managing the website and
              rebranding efforts to ensure their message is clear and they
              receive as much community support as possible.
            </p>
          </div>
          <div className="col">
            <img src={janene} alt="" />
            <h2>Janene Kunce</h2>
            <h3>Board Member</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              numquam quae ratione explicabo harum ad molestiae ab. Enim quod
              voluptatibus vero reprehenderit suscipit aspernatur ullam magni,
              alias quia veritatis. Asperiores repellat quo dignissimos,
              voluptatibus beatae quisquam sit error. Amet consequatur dolorem
              architecto harum repudiandae eaque non repellat suscipit rerum,
              adipisci culpa eius, inventore laudantium esse sint corporis.
              Corporis nemo nisi aut sapiente accusamus! Mollitia laborum hic
              sunt impedit soluta omnis ullam ratione, quasi amet consectetur ea
              autem asperiores, illum maxime ex. Est, repudiandae magni! Harum
              quasi, rerum libero inventore vero, architecto magnam magni
              recusandae, saepe aut quisquam quos natus ipsa tempora incidunt
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
