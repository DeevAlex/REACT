import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import "./Start.css";

export const Start = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <main className="mainStart">
      <span className="background"></span>
      <div className="wrapper">
        <article>
          <h5>BEST FITNESS IN THE TOWN</h5>
          <h1 className="title">
            <span className="titleEmphasis">MAKE</span> YOUR BODY SHAPE
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, voluptates libero? Ipsam nesciunt obcaecati voluptas,
            dolore tempore, facilis delectus, architecto ducimus id itaque cum
            nulla quae totam quod deleniti labore recusandae autem fugiat
            possimus esse voluptatibus dicta soluta vel? Saepe perspiciatis
          </p>
          <button className="btn ">Get Started</button>
        </article>
        <img src="IMG/header.png" data-aos="fade-left" alt="imagem" />
      </div>
    </main>
  );
};
