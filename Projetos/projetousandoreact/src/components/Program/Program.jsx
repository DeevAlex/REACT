import { useEffect } from "react";

import "./Program.css";

import AOS from "aos";
import "aos/dist/aos.css";

export const Program = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <main className="mainProgram">
      <article>
        <div className="wrapperColumn">
          <div className="wrapper explorePrograms">
            <h2>EXPLORE OUR PROGRAM</h2>
            <div className="icons">
              <i class="icon bx-lg bx bx-left-arrow-circle"></i>
              <i class="icon bx-lg bx bx-right-arrow-circle"></i>
            </div>
          </div>

          <section className="programs wrapper">
              <div className="program" data-aos="fade-right">
                <i class="bx bg-emphasis bx-md bxs-heart" style={{ color: "#ffffff" }}></i>
                <h3>Strength</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet</p>
                <a href="#test" className="link linkProgram">
                  Join Now{" "}
                  <i class='bx bx-right-arrow-alt'></i>
                </a>
              </div>
              <div className="program" data-aos="fade-up">
                <i class="bx bg-emphasis bx-md bx-run" style={{ color: "#ffffff" }}></i>
                <h3>Physical Fitness</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet</p>
                <a href="#test" className="link linkProgram">
                  Join Now{" "}
                  <i class='bx bx-right-arrow-alt'></i>
                </a>
              </div>
              <div className="program" data-aos="fade-up">
              <i
                  class="bx bg-emphasis bx-md bx-dumbbell"
                  style={{ color: "#ffffff" }}
                ></i>
                <h3>Fat Lose</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet</p>
                <a href="#test" className="link linkProgram">
                  Join Now{" "}
                  <i class='bx bx-right-arrow-alt'></i>
                </a>
              </div>
              <div className="program" data-aos="fade-left">
                <i
                  class="bx bg-emphasis bx-md bxs-shopping-bag"
                  style={{ color: "#ffffff" }}
                ></i>
                <h3>Weight Gain</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet</p>
                <a href="#test" className="link linkProgram">
                  Join Now{" "}
                  <i class='bx bx-right-arrow-alt'></i>
                </a>
              </div>
          </section>
        </div>
      </article>
    </main>
  );
};
