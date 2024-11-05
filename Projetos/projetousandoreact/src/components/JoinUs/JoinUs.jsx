import { useEffect } from "react";

import "./JoinUs.css";

import AOS from "aos";
import "aos/dist/aos.css";

export const JoinUs = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <main className="mainJoinUs">
      <article className="articleJoinUs">
        <div className="wrapperColumn">
          <h1 data-aos="fade-up">WHY JOIN US ?</h1>
          <p className="paragraphJoinUs" data-aos="fade-up">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
            labore cupiditate. Aut quaerat id odio, labore commodi aspernatur,
            iste, nobis praesentium ea similique doloremque
          </p>
          <div className="informations">
            <img src="IMG/join.jpg" alt="imagem" data-aos="fade-up" />
            <section className="wrapper sectionJoinUs" data-aos="fade-up">
              <div className="joinUsInfo" data-aos="fade-right">
                <i class="bx bg-emphasis bx-lg bxs-user-check"></i>
                <div>
                  <h3>Personal Trainer</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aut, reiciendis?
                  </p>
                </div>
              </div>
              <div className="joinUsInfo" data-aos="fade-up">
                <i
                  class="bx bg-emphasis bx-lg bx-building-house"
                  style={{ color: "#ffffff" }}
                ></i>
                <div>
                  <h3>Practice Sessions</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aut, reiciendis?
                  </p>
                </div>
              </div>
              <div className="joinUsInfo" data-aos="fade-left">
                <i
                  class="bx bg-emphasis bx-lg bxs-camera-movie"
                  style={{ color: "#ffffff" }}
                ></i>
                <div>
                  <h3>Good Management</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aut, reiciendis?
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
};
