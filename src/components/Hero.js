import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Img from "../img/Rectangle-55.png";
import styled from "styled-components";

const Herosection = styled.section`
  height: 50vh;
  max-height: 550px;
  position: relative;
  overflow: hidden;
`;
const HeroWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-itmes: center:
overflow: hidden;
position: relative;
`;
const HeroSlide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
  }
`;
const HeroImage = styled.img`
position: absolute;
top: 0;
left; 0;
width: 100vw;
height: 100vh;
object-fit: cover;
`;
const Herocontent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: #fff;
  h1 {
    font-size: clamp(0.8rem, 8vw, 3rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }
  p {
    margin-bottom: 1.5rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    font-weight: 400;
    font-size: clamp(0.8rem, 8vw, 1.2em);
  }
`;

const Hero = () => {
  return (
    <Herosection>
      <HeroImage src={Img} alt="" />
      <HeroWrapper>
        <HeroSlide>
          <Herocontent>
            <h6 style={{ color: "#e53f70" }}>Build New Apps</h6>
            <h1>
              Find A <span style={{ color: "#ffb34e" }}>Better Solution </span>
              <br />
              for your business
            </h1>
          </Herocontent>
        </HeroSlide>
      </HeroWrapper>
    </Herosection>
  );
};

export default Hero;
