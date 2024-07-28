import styled from "styled-components";

const Wrapper = styled.nav`
  .nav {
    position: fixed;
    z-index: 1000;
  }

  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2em;
  }

  .logo img {
    max-width: 13vw; /* Ensure the image scales with its container */
    height: auto; /* Maintain aspect ratio */

    @media (max-width: 768px) {
      max-width: 20vw;
    }

    @media (max-width: 480px) {
      max-width: 30vw;
    }
  }

  .menu-toggle {
    cursor: pointer;
  }

  .nav-overlay {
    position: fixed;
    background: #18181c;
    z-index: -2;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    padding: 4em;
    transition: all 2s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .hamBox {
    position: relative;
    width: 44px;
    height: 44px;
    cursor: pointer;
    border-radius: 50%;
    transition: 0.3s ease;
    padding: 2.4em;
  }

  .hamBox:hover {
    background: #18181c;
  }

  .hamBoxOpen {
    background: #18181c;
  }

  .hamBoxOpen:hover {
    background: #2a2a2f;
  }

  .lineTop,
  .lineBottom,
  .lineMid {
    margin: 0 auto;
    position: absolute;
    display: block;
    width: 24px;
    height: 2px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.5);
    left: 0;
    right: 0;
    transform: rotate(0deg);
    transition: all 0.4s;
  }

  .lineTop {
    top: 2.2em;
  }

  .lineMid {
    top: 1.9em;
  }

  .lineBottom {
    bottom: 2.2em;
  }

  .lineTop.spin {
    top: 2.35em;
    transform: rotate(135deg);
    background: #fff;
  }

  .lineMid.spin {
    top: 2.35em;
    transform: rotate(135deg);
    background: #fff;
  }

  .lineBottom.spin {
    bottom: 2.35em;
    transform: rotate(225deg);
    background: #fff;
  }

  ul.nav-links {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  ul.nav-links li {
    font-family: "Satoshi-Light";
    list-style: none;
    margin: 10px;
    padding: 13px;
    position: relative;

    @media (max-width: 900px),
      @media (max-width: 768px),
      @media (max-width: 480px) {
      font-size: 2vw;
    }
  }

  ul.nav-links li span {
    font-family: "Satoshi-Black";
    font-size: 1rem;
    list-style: none;
    position: relative;
  }

  ul.nav-links li a {
    text-decoration: none;
    color: #fff;
    font-size: 6em;
    position: relative;
    top: 0;
    transition: all 2s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .nav-item-wrapper:after {
    content: "";
    position: absolute;
    top: 120px;
    left: -10%;
    width: 120%;
    height: 100%;
    background: #18181c;
    margin: 0 auto;
  }

  .nav-footer {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    padding: 2em;
    margin-bottom: 2px;
    display: flex;
    color: white;
    justify-content: space-between;
    font-family: "Satoshi-Bold";
    letter-spacing: 2px;

    @media (max-width: 900px),
      @media (max-width: 768px),
      @media (max-width: 480px) {
      padding: 1em;
    }
  }

  .nav-social-media ul {
    display: flex;
  }

  .nav-social-media ul li {
    list-style: none;
  }

  .nav-social-media ul li a {
    position: relative;
    bottom: -20px;
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    padding-left: 2em;
    opacity: 0;
    transition: all 2s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .location {
    position: relative;
    bottom: -20px;
    opacity: 0;
    transition: all 2s cubic-bezier(0.16, 1, 0.3, 1);
    text-transform: uppercase;
  }

  @media (max-wdth: 900px) {
    ul.nav-links li a {
      font-size: 5em;
    }

    .location {
      display: none;
    }

    .nav-footer {
      justify-content: space-around;
    }

    .nav-social-media ul li a {
      padding: 0 1em;
    }
  }
`;

export default Wrapper;
