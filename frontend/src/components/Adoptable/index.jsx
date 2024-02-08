import "./index.css";
import Header from "../../components/Header";
import RabbitCard from "../../components/RabbitCard";

// !TODO import rabbits from markdown folder

const index = () => {
  return (
    <section className="adoptable">
      <Header title="Adoptable Rabbits" />
      <div className="container">
        <RabbitCard />
        <RabbitCard />
      </div>
    </section>
  );
};

export default index;
