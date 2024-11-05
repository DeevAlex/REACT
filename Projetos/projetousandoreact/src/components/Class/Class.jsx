import { useEffect } from "react";

import "./Class.css";

import AOS from "aos";
import "aos/dist/aos.css";

export const Class = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

  return (
    <main className="mainClass">
      <article>
        <div className="wrapperClass">
          <div className="images">
            <img src="IMG/class-1.jpg" alt="" data-aos="fade-right" />
            <img src="IMG/class-2.jpg" data-aos="fade-up" className="imageAbsoluta" alt="" />
          </div>
          <div className="aboutClass" data-aos="fade-right">
            <h1>GET THE CLASS YOU WILL GET HERE</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              ullam odit beatae voluptatem veritatis consequatur voluptas
              nostrum! Eum deleniti culpa quibusdam dicta ut incidunt recusandae
              ratione, totam officia reiciendis placeat doloremque debitis
              doloribus corporis porro illo necessitatibus in? Ad debitis
              temporibus voluptatum sint omnis quo, error eum enim quos sunt.
            </p>
            <button className="btn">Book A Class</button>
          </div>
        </div>
      </article>
    </main>
  );
};
