import styled from "styled-components";

const Wrapper = styled.section`
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: black;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: block;
  align-items: center;
  justify-content: center;
  margin: 0;

  .logo {
    padding: 5px;
  }

  ::-webkit-scrollbar {
    scrollbar-gutter: stable;
    width: 3px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(155, 155, 155, 0.5);
    border-radius: 20px;
    border: transparent;
  }

  .page {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .arrowIcon {
    z-index: 1;
    font-size: 3em;
  }

  .arr {
    font-size: 60px;
  }

  @media (max-width: 900px),
    @media (max-width: 768px),
    @media (max-width: 480px) {
    .arr {
      font-size: 30px;
    }
  }

  /* Second Section of the Landing Page */

  .skyIntro {
    color: white;
    max-width: 100%;
    display: grid;
    grid-template-columns: 20vw 1fr;
    gap: 20px; /* Adjust gap as needed */
  }

  .text {
    h2 {
      font-family: "Satoshi-Bold";
    }
    display: flex;
    font-family: "Satoshi-Light";
    font-size: 1.5em;
    flex-direction: column;
    justify-content: space-evenly;
    @media (max-width: 1000px) {
      font-size: 1.3em;
    }
    @media (max-width: 900px) {
      font-size: 1.3em;
    }
    @media (max-width: 768px) {
      font-size: 0.9em;
    }
    @media (max-width: 480px) {
      font-size: 0.6em;
    }
  }
`;

export default Wrapper;
