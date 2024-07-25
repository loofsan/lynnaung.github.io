import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking </span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
            urna sed tortor feugiat tempus. Fusce finibus fringilla eros. Proin
            pharetra blandit porttitor. Fusce risus nibh, pulvinar eget lacus
            sit amet, tincidunt vestibulum est. Morbi pulvinar dapibus
            pellentesque. Cras bibendum auctor purus, eu tempor quam tristique
            eu. Nunc accumsan augue eleifend, mollis mi in, dignissim lectus.
            Praesent malesuada lacus quis nulla sollicitudin, posuere lacinia
            dolor rutrum. In a orci eleifend, egestas leo vel, malesuada nisi.
            Curabitur iaculis urna elit. In in turpis at urna cursus cursus
            vitae ut ipsum. Vestibulum id odio nec dolor iaculis laoreet.
          </p>
          <Link to="/calendar" className="btn register-link">
            Calendar
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
