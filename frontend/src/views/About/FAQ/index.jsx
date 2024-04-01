import { useEffect, useState } from "react";
import Accordian from "../../../components/Accordian";
import Header from "../../../components/Header";

import "./index.css";

const index = () => {
  // initialize data state and fetch data from json
  const [data, setData] = useState([]);

  // function to get data
  const getData = async () => {
    fetch("/faq.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  // on load, fetch data
  useEffect(() => {
    getData();
  });

  return (
    <section className="faq">
      <Header title="Frequently Asked Questions" />
      <div className="container">
        <div className="text-container">
          <p>
            Here, we&apos;ve compiled answers to some of the most common
            questions about our organization, our mission, and how you can get
            involved. Whether you&apos;re looking to adopt a rabbit, volunteer
            with us, or simply learn more about responsible rabbit ownership, we
            hope you&apos;ll find the information you need here. If you have a
            question that&apos;s not answered below, please don&apos;t hesitate
            to reach out to us. Your support means the world to us and the
            rabbits in our care.
          </p>
          <p>
            Thank you for your interest in BunnAgain Rabbit Rescue and
            Education!
          </p>
        </div>
        {data.map((i, index) => {
          return <Accordian data={i} key={index} />;
        })}
      </div>
    </section>
  );
};

export default index;
