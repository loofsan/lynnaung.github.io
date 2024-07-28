import styled from "styled-components";
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/logoWhite.png";
import { FaChevronDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Navbar, BoxReveal, ImageHover, FullScreenSlider } from "../components";

const Landing = () => {
  useEffect(() => {
    // Set the initial state of the elements
    gsap.set(".singleLine div", { y: 200 });

    // Define the GSAP timeline and animation
    const t1 = gsap.timeline();
    t1.to(".singleLine div", {
      y: 0,
      ease: "power4.out",
      delay: 0.4,
      duration: 1.8,
      stagger: {
        amount: 0.4,
      },
    });

    // GSAP animation for the ArrowIcon
    gsap.fromTo(
      ".arrowIcon",
      { opacity: 0 }, // Starting opacity
      {
        delay: 2,
        opacity: 0.6, // Ending opacity
        repeat: -1, // Infinite loop
        yoyo: true, // Makes it go back and forth
        duration: 1.5, // Duration of one cycle
        ease: "power1.inOut", // Easing function
      }
    );
  }, []);

  const ref = useRef(null);
  const scrollToNextSection = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Wrapper>
      <Navbar />
      <div className="container page">
        <Line className="singleLine">
          <Text className="Text">
            <span>
              <img src={main} alt="logo" className="img logo" />
            </span>
            <span>Sky</span>
            <span>li</span>
            <span>ne</span>
          </Text>
        </Line>
        <Line className="singleLine">
          <Text className="Text">
            <span>Esthetics</span>
          </Text>
        </Line>
        <Line className="singleLine">
          <Text className="Text">
            <span>Barbering</span>
          </Text>
        </Line>
        <Line className="singleLine">
          <Text className="Text">
            <span>Cosmetology</span>
          </Text>
        </Line>
        <ArrowIcon className="arrowIcon" onClick={scrollToNextSection}>
          <FaChevronDown className="arr" color="#fff" />
        </ArrowIcon>
      </div>
      <div className="container page" ref={ref}>
        <div className="skyIntro">
          <div className="text">
            <BoxReveal boxColor={"#f2f2f2"} duration={0.5}>
              <h2>About Us</h2>
            </BoxReveal>
            <BoxReveal boxColor={"#f2f2f2"} duration={0.5}>
              Skyline College offers three career and technical education
              programs with courses focusing on theoretical foundation,
              practical skills, businesss knowledge, and the professional and
              ethical training needed for licensing through the California State
              Board of Barbering and Cosmetology.
            </BoxReveal>
          </div>
          <ImageHover />
        </div>
      </div>
      <div className="container page">
        <FullScreenSlider />
      </div>
    </Wrapper>
  );
};

const Line = styled.div`
  width: 100%;
  height: 11.5vw;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;

  &:nth-of-type(1) {
    left: 10vw;
    font-family: "Satoshi-Bold";
    @media (max-width: 900px),
      @media (max-width: 768px),
      @media (max-width: 480px) {
      left: 7vw;
    }
  }
  &:nth-of-type(2) {
    font-family: "Satoshi-Light";
    right: 10vw;
  }
  &:nth-of-type(3) {
    left: 5vw;
    font-family: "Satoshi-Bold";
  }
  &:nth-of-type(4) {
    font-family: "Satoshi-Light";
  }
`;

const Text = styled.div`
  position: relative;
  font-size: 10vw;
  color: #fff;
  line-height: 10vw;

  span {
    color: white;
    font-size: 10vw;
    display: inline-block;
  }

  .logo {
    width: 8vw;
    height: 8vw;
    padding: 0;
    margin-right: 3vw;
    object-fit: cover;

    @media (max-width: 900px),
      @media (max-width: 768px),
      @media (max-width: 480px) {
      display: none;
    }
  }
`;

const ArrowIcon = styled.div`
  position: relative;
  justify-content: center;
  z-index: 1;
  cursor: pointer;
`;
export default Landing;
