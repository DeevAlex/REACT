import { useEffect } from "react";

import "./Comment.css";

import AOS from "aos";
import "aos/dist/aos.css";

export const Comment = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <main className="mainComment" data-aos="fade-up">
      <article>
        <div className="wrapperColumn">
          <div className="wrapper wrapperComment">
            <i
              class="bx quote bxs-quote-alt-right"
              style={{ color: "var(--cor3)" }}
            ></i>
            <div className="comment">
              <h3>MEMBER REVIEW</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                ullam odit beatae voluptatem veritatis consequatur voluptas
                nostrum! Eum deleniti culpa quibusdam dicta ut incidunt
                recusandae ratione, totam officia reiciendis placeat doloremque
                debitis doloribus corporis porro illo necessitatibus in? Ad
                debitis temporibus voluptatum sint omnis quo, error eum enim
                quos sunt.
              </p>
              <div className="stars">
                <i
                  class="bx bx-sm bxs-star"
                  style={{ color: "var(--cor3)" }}
                ></i>
                <i
                  class="bx bx-sm bxs-star"
                  style={{ color: "var(--cor3)" }}
                ></i>
                <i
                  class="bx bx-sm bxs-star"
                  style={{ color: "var(--cor3)" }}
                ></i>
                <i
                  class="bx bx-sm bxs-star"
                  style={{ color: "var(--cor3)" }}
                ></i>
                <i
                  class="bx bx-sm bxs-star-half"
                  style={{ color: "var(--cor3)" }}
                ></i>
              </div>
              <div className="authors">
                <div className="author">
                  <img src="IMG/member.jpg" alt="imagem" />
                  <div className="authorInfo">
                    <h3>Jane Cooper</h3>
                    <span>Software Developer</span>
                  </div>
                </div>
                <div className="othersAuthors">
                  <i
                    class="bx bx-md bx-left-arrow-alt"
                    style={{ color: "var(--cor3)" }}
                  ></i>
                  <i
                    class="bx bx-md bx-right-arrow-alt"
                    style={{ color: "var(--cor3)" }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};
