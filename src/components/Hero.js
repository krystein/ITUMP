import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Img from "../img/background.png";
import styled from "styled-components";
import Img1 from "../img/ellispe.png";
import Img2 from "../img/cose1.png";
import { BsApple } from "react-icons/bs";
import { AiFillAndroid } from "react-icons/ai";
import { Button, Row } from "react-bootstrap";

const Herosection = styled.section`
  height: 100vh;
  max-height: 1100px;
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
  padding-top: 80px;
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
`;
const HeroImage = styled.img`
position: absolute;
top: 0;
left; 0;
width: 100vw;
height: 110vh;
object-fit: cover;
`;
const Herocontent = styled.div`
  position: relative;
  z-index: 10;
  display: grid;
  color: #fff;
  width: 100%;
  justify-content: center;
  align-items: center;
  .width {
    width: 70%;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  h1 {
    font-size: clamp(0.5rem, 6vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }
  p {
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    font-weight: 400;
    font-size: clamp(0.5rem, 6vw, 1em);
  }
`;

const Hero = () => {
  return (
    <Herosection id="Home">
      <HeroImage src={Img} alt="" />
      <HeroWrapper>
        <HeroSlide>
          <Herocontent className="container mt-5 pt-5">
            <div className="width">
              <div>
                <h6 style={{ color: "#e53f70", margin: "0" }}>
                  Build New Apps
                </h6>
                <img src={Img1} alt="" />
              </div>
              <div>
                <h1>
                  Find A
                  <span style={{ color: "#ffb34e" }}> Better Technology </span>
                  <br />
                  Partner For{" "}
                  <span style={{ color: "#ffb34e" }}> Your Business </span>
                </h1>
                <p style={{ textAlign: "justify", marginBottom: "0px" }}>
                  We Launched our Technology Asset Management with you in mind.
                  Join US #1 Tech Asset Management Group to Research, Design and
                  Launch your Business Solution with over 10 years of advance
                  management and support build into the contract
                </p>
              </div>
              <div>
                <div className="mt-3">
                  <Row
                    style={{
                      gap: "20px",
                      margin: "0",
                      display: "flex",
                    }}
                  >
                    <Button
                      style={{
                        backgroundColor: "transparent",
                        border: "1px solid #f08ba9",
                        borderRadius: "30px",
                        color: "#f08ba9",
                        width: "130px",
                        height: "50px",
                        fontSize: "20px",
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                      }}
                    >
                      <BsApple />{" "}
                      <h5
                        className="h6"
                        style={{ fontWeight: "500", marginBottom: "0rem" }}
                      >
                        App Store
                      </h5>
                    </Button>
                    <Button
                      style={{
                        backgroundColor: "transparent",
                        border: "1px solid #f08ba9",
                        borderRadius: "30px",
                        color: "#f08ba9",
                        width: "130px",
                        height: "50px",
                        fontSize: "20px",
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                      }}
                    >
                      <AiFillAndroid />{" "}
                      <h5
                        className="h6"
                        style={{ fontWeight: "500", marginBottom: "0rem" }}
                      >
                        Play Store
                      </h5>
                    </Button>
                  </Row>
                </div>
              </div>
            </div>
            <div className="mt-3 mb-5">
              <img
                src={Img2}
                alt=""
                className="img-fluid"
                style={{ borderRadius: "30px" }}
              />
            </div>
          </Herocontent>
        </HeroSlide>
      </HeroWrapper>
    </Herosection>
  );
};

export default Hero;
