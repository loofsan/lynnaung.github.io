import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Navbar";
import main from "../assets/images/fullLogoWhite.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = (e) => {
    if (navOpen) {
      setNavOpen(false);
    } else {
      // Navigate to home if not already on the home page
      if (location.pathname !== "/") {
        return;
      }
      e.preventDefault();
    }
  };

  return (
    <Wrapper>
      <div className="nav">
        <div className="nav-container">
          <div className="navbar">
            <div className="logo">
              <Link
                to="/"
                onClick={handleLinkClick}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "0.9s" : "0s",
                }}
              >
                <img src={main} alt="logo" />
              </Link>
            </div>
            <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
              <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
                <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
                <span className={navOpen ? "lineMid spin" : "lineMid"}></span>
                <span
                  className={navOpen ? "lineBottom spin" : "lineBottom"}
                ></span>
              </div>
            </div>
          </div>

          <div
            className="nav-overlay"
            style={{
              top: navOpen ? "0" : "-100%",
              transitionDelay: navOpen ? "0s" : "0s",
            }}
          >
            <ul className="nav-links">
              <li className="nav-item">
                <Link
                  to="/"
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? "0" : "120px",
                    transitionDelay: navOpen ? "0.8s" : "0s",
                  }}
                >
                  Home
                  <span className="numbers">01</span>
                </Link>
                <div className="nav-item-wrapper"></div>
              </li>
              <li className="nav-item">
                <Link
                  to="/calendar"
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? "0" : "120px",
                    transitionDelay: navOpen ? "0.9s" : "0s",
                  }}
                >
                  Booking
                  <span className="numbers">02</span>
                </Link>
                <div className="nav-item-wrapper"></div>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? "0" : "120px",
                    transitionDelay: navOpen ? "1s" : "0s",
                  }}
                >
                  Contact
                  <span className="numbers">03</span>
                </Link>
                <div className="nav-item-wrapper"></div>
              </li>
            </ul>
            <div className="nav-footer">
              <div
                className="location"
                style={{
                  bottom: navOpen ? "0" : "-20px",
                  opacity: navOpen ? "1" : "0",
                  transitionDelay: navOpen ? "1.2s" : "0",
                }}
              >
                <span>Skyline College</span>
              </div>
              <div className="nav-social-media">
                <ul>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.instagram.com/skyline_college/?hl=en"
                      style={{
                        bottom: navOpen ? "0" : "-20px",
                        opacity: navOpen ? "1" : "0",
                        transitionDelay: navOpen ? "1.4s" : "0",
                      }}
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
