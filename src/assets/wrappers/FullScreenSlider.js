import styled from "styled-components";

const Wrapper = styled.main`
  position: relative;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    overflow: hidden;
  }

  .slider,
  .slider-content {
    align-items: center;
    width: 50vw;
    height: 50vh;
  }

  .slider {
    position: relative;
  }

  .slide {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
  }

  #slide-1 {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .slider-content {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .slide-number {
    position: absolute;
    top: 55%;
    left: 10%;
    transform: translate(-50%, -50%);
    display: flex;
    gap: 0.25em;
    @media (max-width: 900px) {
      top: 25%;
      left: 10%;
    }
  }

  .postfix span {
    padding: 0 0.25em;
  }

  .slide-name {
    position: absolute;
    top: 55%;
    left: 40%;
    transform: translate(-50%, -50%);
    @media (max-width: 900px) {
      top: 38.3%;
      left: 10%;
    }
  }

  .slide-year {
    position: absolute;
    top: 55%;
    left: 75%;
    transform: translate(-50%, -50%);
    @media (max-width: 900px) {
      top: 41.6%;
      right: 20%;
    }
  }

  .slide-number,
  .slide-name,
  .slide-year {
    font-size: 18px;
    color: #fff;
    line-height: 30px;
    clip-path: polygon(0 0, 100% 0, 100% 30px, 0 30px);
    text-transform: uppercase;
    @media (max-width: 900px) {
      font-size: 10px;
    }
  }

  .prefix,
  .names,
  .years {
    position: relative;
    top: 0;
  }

  @media (max-width: 900px) {
    .slide-name {
      left: 50%;
    }

    .slide-year {
      right: 10%;
    }
  }
`;

export default Wrapper;
