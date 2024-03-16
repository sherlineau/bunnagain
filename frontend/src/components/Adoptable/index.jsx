import "./index.css";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import RabbitCard from "../../components/RabbitCard";

const index = () => {
  // initialize data state and fetch data from json
  const [data, setData] = useState([]);

  // function to get data
  const getData = async () => {
    fetch("/adoptable.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  // on load, fetch data
  useEffect(() => {
    getData();
  });

  return (
    <section className="adoptable">
      <Header title="Adoptable Rabbits" />
      <div className="container">
        {data.map((i, index) => {
          return <RabbitCard data={i} key={index} />;
        })}
      </div>
    </section>
  );
};

export default index;
