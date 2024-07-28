import React, { useEffect, useRef } from "react";
import Wrapper from "../assets/wrappers/FullScreenSlider";
import gsap from "gsap";
import img1 from "../assets/images/scrollImg1.jpg";
import img2 from "../assets/images/scrollImg2.jpg";
import img3 from "../assets/images/scrollImg3.png";
import img4 from "../assets/images/scrollImg4.jpg";

const FullScreenSlider = () => {
  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    let currentSlideIndex = 0;
    let isAnimating = false;
    let currentTopValue = 0;

    const elements = [
      { selector: ".prefix", delay: 0 },
      { selector: ".names", delay: 0.15 },
      { selector: ".years", delay: 0.3 },
    ];

    slides.forEach((slide, idx) => {
      if (idx !== 0) {
        const img = slide.querySelector("img");
        gsap.set(img, { scale: 2, top: "4em" });
      }
    });

    function showSlide(index) {
      if (isAnimating) return;
      isAnimating = true;
      const slide = slides[index];
      const img = slide.querySelector("img");

      currentTopValue -= 30;

      elements.forEach((elem) => {
        gsap.to(document.querySelector(elem.selector), {
          y: `${currentTopValue}px`,
          duration: 2,
          ease: "power4.inOut",
          delay: elem.delay,
        });
      });

      gsap.to(img, {
        scale: 1,
        top: "0%",
        duration: 2,
        ease: "power3.inOut",
      });

      gsap.to(slide, {
        clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
        duration: 2,
        ease: "power4.inOut",
        onComplete: () => {
          isAnimating = false;
        },
      });
    }

    function hideSlide(index) {
      if (isAnimating) return;
      isAnimating = true;
      const slide = slides[index];
      const img = slide.querySelector("img");

      currentTopValue += 30;
      elements.forEach((elem) => {
        gsap.to(document.querySelector(elem.selector), {
          y: `${currentTopValue}px`,
          duration: 2,
          ease: "power4.inOut",
          delay: elem.delay,
        });
      });

      gsap.to(slide, {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        duration: 2,
        ease: "power4.inOut",
      });

      gsap.to(img, {
        scale: 2,
        top: "4em",
        duration: 2,
        ease: "power3.inOut",
      });

      gsap.to(slide, {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        duration: 2,
        onComplete: () => {
          isAnimating = false;
        },
      });
    }

    const handleWheel = (e) => {
      if (isAnimating) return;
      if (e.deltaY > 0 && currentSlideIndex < slides.length - 1) {
        showSlide(currentSlideIndex + 1);
        currentSlideIndex++;
      } else if (e.deltaY < 0 && currentSlideIndex > 0) {
        hideSlide(currentSlideIndex);
        currentSlideIndex--;
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <Wrapper>
      <div className="slider-content">
        <div className="slide-number">
          <div className="prefix">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
          <div className="postfix">
            <span>/</span>4
          </div>
        </div>

        <div className="slide-name">
          <div className="names">
            <div>Barbering Program</div>
            <div>Cosmetology Program</div>
            <div>Esthetics Program</div>
            <div>Crossover Program</div>
          </div>
        </div>

        <div className="slide-year">
          <div className="years">
            <div>1000 Hours</div>
            <div>1000 Hours</div>
            <div>600 Hours</div>
            <div>1 8-Week Session</div>
          </div>
        </div>
      </div>
      <div className="slider">
        <div className="slide" id="slide-1">
          <img src={img1} alt="" />
        </div>
        <div className="slide" id="slide-2">
          <img src={img2} alt="" />
        </div>
        <div className="slide" id="slide-3">
          <img src={img3} alt="" />
        </div>
        <div className="slide" id="slide-4">
          <img src={img4} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};
export default FullScreenSlider;
