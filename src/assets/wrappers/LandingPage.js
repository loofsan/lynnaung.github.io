import styled from "styled-components";

const Wrapper = styled.section`
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: black;
  width: 100vw;
  height: 100vh;
  color: #000000;
  position: relative;
  display: block;
  align-items: center;
  justify-content: center;
  margin: 0;

  .logo {
    padding: 5px;
  }

  &::-webkit-scrollbar {
    width: 0; /* Hide scrollbar */
  }
  &::-webkit-scrollbar-thumb {
    background: transparent; /* Hide scrollbar thumb */
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
`;

export default Wrapper;
