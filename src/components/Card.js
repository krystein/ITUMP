import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Img from "../img/Rectangle-55.png";
import styled from "styled-components";
import { IoArrowForward } from "react-icons/io5";
import { Button } from "react-bootstrap";

const Herosection = styled.section`
  height: 65vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  border-radius: 30px;
  justify-content: center;
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
  text-align: center;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: #fff;
  h1 {
    font-size: clamp(0.7rem, 7vw, 2.5rem);
    font-weight: 400;
    text-transform: titlecase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: center;
    margin-bottom: 0.8rem;
  }
  h4 {
    margin-bottom: 1.5rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    font-weight: 400;
    font-size: clamp(0.5rem, 7vw, 1.2em);
  }
`;

const Hero = () => {
  return (
    <div className="container">
      <Herosection>
        <HeroImage src={Img} alt="" className="img img-fluid" />
        <HeroWrapper>
          <HeroSlide>
            <Herocontent>
              <h1>
                Lets Start
                <span style={{ color: "#ffb34e" }}> A New Invention </span>
              </h1>
              <h4>
                To continues please ensure your business is already making
                income, we will use your current monthly business income to
                calculate how much we can invest in your app{" "}
              </h4>
              <h4>
                we will invest upto $50,000 in your new invention if approved
                with ITUMP
              </h4>
              <div
                className="mt-5"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div>
                  <Button
                    className="btn-md"
                    style={{
                      borderRadius: "50px",
                      display: "flex",
                      gap: "10px",
                      border: "none",
                      alignItems: "center",
                      backgroundImage:
                        "linear-gradient(-225deg, #ac32e4 26%, #7918f2 78%, #4801ff 100%)",
                    }}
                  >
                    Check Out
                    <span
                      style={{
                        borderRadius: "30px",
                        width: "30px",
                        height: "30px",
                        border: "none",
                        backgroundColor: "#fff",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <IoArrowForward
                        style={{ fontSize: "20px", color: "#000" }}
                      />
                    </span>
                  </Button>
                </div>
              </div>
            </Herocontent>
          </HeroSlide>
        </HeroWrapper>
      </Herosection>
    </div>
  );
};

export default Hero;
