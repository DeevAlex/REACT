import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import "./Footer.css";

export const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <footer className="footer" data-aos="fade-up">
      <article>
        <div className="CompanyInfo">
          <div className="wrapperColumn social">
            <div>
              <img src="IMG/logo.png" alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              harum necessitatibus ab totam perferendis pariatur provident eum
              dolores ducimus vitae?
            </p>
            <ul>
              <li>
                <a href="#test">
                  <i
                    class="bx bx-md socialIcon bxl-twitter"
                    style={{ color: "var(--cor3)" }}
                  ></i>
                </a>
              </li>
              <li>
                <a href="#test">
                  <i
                    class="bx bx-md socialIcon bxl-facebook-circle"
                    style={{ color: "var(--cor3)" }}
                  ></i>
                </a>
              </li>
              <li>
                <a href="#test">
                  <i
                    class="bx bx-md socialIcon bxl-instagram"
                    style={{ color: "var(--cor3)" }}
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="blockLinks">
          <div className="footer-column">
            <h3>Company</h3>
            <div className="space">
              <ul>
                <li>
                  <a href="#test" className="link">
                    Business
                  </a>
                </li>
                <li>
                  <a href="#test" className="link">
                    Franchise
                  </a>
                </li>
                <li>
                  <a href="#test" className="link">
                    Parthership
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-column">
            <h3>About Us</h3>
            <ul>
              <li>
                <a href="#test" className="link">
                  Blog
                </a>
              </li>
              <li>
                <a href="#test" className="link">
                  Security
                </a>
              </li>
              <li>
                <a href="#test" className="link">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="#test" className="link">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#test" className="link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#test" className="link">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#test" className="link">
                  BMI Calculator
                </a>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </footer>
  );
};
