import React, { useEffect, useRef } from "react";
import Wrapper from "../assets/wrappers/ImageHover";
import img1 from "../assets/images/skyImg1.png";
import img2 from "../assets/images/skyImg2.jpg";
import img3 from "../assets/images/skyImg3.jpg";
import img4 from "../assets/images/skyImg4.jpg";
import img5 from "../assets/images/skyImg5.jpg";

const ImageHover = () => {
  const galleryContainerRef = useRef(null);
  const indicatorRef = useRef(null);

  useEffect(() => {
    const galleryContainer = galleryContainerRef.current;
    const galleryItems = galleryContainer.querySelectorAll(".gallery-item");
    const indicator = indicatorRef.current;

    const defaultItemFlex = "0 1 20px";
    const hoverItemFlex = "1 1 400px";

    const updateGalleryItems = () => {
      galleryItems.forEach((item) => {
        let flex = defaultItemFlex;

        if (item.isHovered) {
          flex = hoverItemFlex;
        }

        item.style.flex = flex;
      });
    };

    galleryItems[0].isHovered = true;
    updateGalleryItems();

    galleryItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        galleryItems.forEach((otherItem) => {
          otherItem.isHovered = otherItem === item;
        });
        updateGalleryItems();
      });
    });

    galleryContainer.addEventListener("mousemove", (e) => {
      indicator.style.left = `${
        e.clientX - galleryContainer.getBoundingClientRect().left
      }px`;
    });

    // Cleanup event listeners on component unmount
    return () => {
      galleryItems.forEach((item) => {
        item.removeEventListener("mouseenter", () => {
          galleryItems.forEach((otherItem) => {
            otherItem.isHovered = otherItem === item;
          });
          updateGalleryItems();
        });
      });

      galleryContainer.removeEventListener("mousemove", (e) => {
        indicator.style.left = `${
          e.clientX - galleryContainer.getBoundingClientRect().left
        }px`;
      });
    };
  }, []);

  return (
    <Wrapper>
      <div className="container" ref={galleryContainerRef}>
        <div className="indicator" ref={indicatorRef}></div>
        <div className="gallery">
          <div className="gallery-item">
            <img src={img1} alt="" />
          </div>
          <div className="gallery-item">
            <img src={img2} alt="" />
          </div>
          <div className="gallery-item">
            <img src={img3} alt="" />
          </div>
          <div className="gallery-item">
            <img src={img4} alt="" />
          </div>
          <div className="gallery-item">
            <img src={img5} alt="" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ImageHover;
