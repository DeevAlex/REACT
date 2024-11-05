import { useEffect } from "react";

import "./Plans.css";

import AOS from "aos";
import "aos/dist/aos.css";

export const Plans = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <main className="mainPlans">
      <article>
        <div className="wrapperColumn colunaPlans">
          <div className="wrapperColumn firstContainer" data-aos="fade-up">
            <h1>OUR PRICING PLAN</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            </p>
          </div>
          <div className="wrapper wrapperPlans">
            <div className="plan" data-aos="fade-left">
              <div className="planInfo">
                <h3>Basic Plan</h3>
                <span>$16</span>
                <hr />
                <ul>
                  <div className="checkWhatHaveInPlan wrapper">
                    <i
                      class="bx bx-check-circle"
                      style={{ color: "var(--cor3)" }}
                    ></i>
                    <p>Smart</p>
                  </div>
                  <div className="checkWhatHaveInPlan wrapper">
                    <i
                      class="bx bx-check-circle"
                      style={{ color: "var(--cor3)" }}
                    ></i>
                    <p>At home workhouse</p>
                  </div>
                </ul>
              </div>
              <button className="btn">Join Now</button>
            </div>

            <div className="plan" data-aos="fade-up">
              <div className="planInfo">
                <h3>Weekly Plan</h3>
                <span>$25</span>
                <hr />
                <ul>
                  <div className="checkWhatHaveInPlan wrapper">
                    <i
                      class="bx bx-check-circle"
                      style={{ color: "var(--cor3)" }}
                    ></i>
                    <p>Smart</p>
                  </div>
                  <div className="checkWhatHaveInPlan wrapper">
                    <i
                      class="bx bx-check-circle"
                      style={{ color: "var(--cor3)" }}
                    ></i>
                    <p>PRO Gyms</p>
                  </div>
                  <div className="checkWhatHaveInPlan wrapper">
                    <i
                      class="bx bx-check-circle"
                      style={{ color: "var(--cor3)" }}
                    ></i>
                    <p>At home workouts</p>
                  </div>
                </ul>
              </div>
              <button className="btn">Join Now</button>
            </div>

            <div className="plan" data-aos="fade-right">
              <div className="planInfo">
                <h3>Montly Plan</h3>
                <span>$45</span>
                <hr />
                <ul>
                  <div className="checkWhatHaveInPlan wrapper">
                    <i
                      class="bx check bx-check-circle"
                      style={{ color: "var(--cor3)" }}
                    ></i>
                    <p>Smart</p>
                  </div>
                  <div className="checkWhatHaveInPlan wrapper">
                    <i
                      class="bx check bx-check-circle"
                      style={{ color: "var(--cor3)" }}
                    ></i>
                    <p>ELITE Gyms & Classes</p>
                  </div>
                  <div className="checkWhatHaveInPlan wrapper">
                    <i
                      class="bx check bx-check-circle"
                      style={{ color: "var(--cor3)" }}
                    ></i>
                    <p>Smart workout plan</p>
                  </div>
                  <div className="checkWhatHaveInPlan wrapper">
                    <i
                      class="bx check bx-check-circle"
                      style={{ color: "var(--cor3)" }}
                    ></i>
                    <p>At home workout</p>
                  </div>
                  <div className="checkWhatHaveInPlan wrapper">
                    <i
                      class="bx check bx-check-circle"
                      style={{ color: "var(--cor3)" }}
                    ></i>
                    <p>Personal Training</p>
                  </div>
                </ul>
              </div>
              <button className="btn">Join Now</button>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};
