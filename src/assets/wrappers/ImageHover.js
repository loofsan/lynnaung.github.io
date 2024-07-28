import styled from "styled-components";

const Wrapper = styled.main`
  .container {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: center;
    width: 800px;
    margin: 0 auto 2em auto;
    padding: 1em 0.5em;
    display: flex;
    justify-content: center;
    @media (max-width: 1000px) {
      width: 400px;
      height: 400px;
    }
    @media (max-width: 900px) {
      width: 350px;
      height: 350px;
    }
    @media (max-width: 768px) {
      width: 300px;
      height: 300px;
    }

    @media (max-width: 480px) {
      width: 200px;
      height: 200px;
    }
  }

  .indicator {
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 5px;
    background: #fff;
    border-radius: 100%;
    transition: all 1.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .gallery {
    display: flex;
    justify-content: space-around;
    width: 100%;
    overflow: hidden;
  }

  .gallery-item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 1 20px;
    height: 400px;
    margin: 0 5px;
    background: #000;
    overflow: hidden;
    transition: flex 2.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .gallery-item img {
    width: 400px;
    height: 100%;
    object-fit: contain;
    transform: scale(2);
  }
`;

export default Wrapper;
