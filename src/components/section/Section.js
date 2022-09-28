import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./section.css";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Img1 from "../../img/ellispe.png";
import Img2 from "../../img/Application.svg";
import Img3 from "../../img/cart.svg";
import Img4 from "../../img/AI.svg";
import Img5 from "../../img/Glasses.png";
import Img6 from "../../img/key.svg";
import Img7 from "../../img/nft.svg";

const Valuepage = styled.div`
  transform: translatey(0px);
  padding: 20px;
  &:hover {
    .img {
      display: flex;
      justify-content: center;
    }
    border-radius: 0px 30px;
    box-shadow: 0.25rem 0.25rem 3.38rem rgba(217, 217, 217, 0.5);
    transform: scale(1.05);
    text-align: center;
    background-color: #f9fafc;
  }
  @media Screen and (max-width: 1200px) {
    border-radius: 0px 30px;
    box-shadow: 0.25rem 0.25rem 3.38rem rgba(217, 217, 217, 0.5);
    background-color: #f9fafc;
  }
`;

const Section = () => {
  return (
    <div id="Services">
      <Container
        className="mt-5 pt-5 mb-5 pb-5"
        style={{ backgroundColor: "#fff" }}
      >
        <div style={{ display: "grid", alignItems: "center" }}>
          <h6 style={{ color: "#e53f70" }}>How It Works</h6>
          <img src={Img1} alt="" />
        </div>
        <div className="cols">
          <div className="py-3">
            <h1>
              Our <span style={{ color: "#ffb34e" }}>Services</span>
            </h1>
            <p className="text-justify">
              Since 2011 we have been working with fortune businesses to create
              and launch their apps and tech services. let's work with you today
              to get your new app or invention started together.
            </p>
          </div>
          <Valuepage>
            <div className="img">
              <button
                className="btn btn-primary"
                style={{
                  backgroundColor: "#1087DC",
                  border: "none",
                  margin: "20px",
                }}
              >
                <img src={Img4} alt="" className="img-fluid" />
              </button>
            </div>
            <h3>AI Technology</h3>
            <h6>
              Use Ask.Emmy your most trusted AI for business or have us design
              yours from Zero to One
            </h6>
          </Valuepage>
          <Valuepage>
            <div className="img">
              <button
                className="btn btn-primary"
                style={{
                  backgroundColor: "#0DCFDB",
                  border: "none",
                  margin: "20px",
                }}
              >
                <img src={Img5} alt="" className="img-fluid" />
              </button>
            </div>
            <h3>VR Technology</h3>
            <h6>
              Create Professional Virtual reality systems or have us embed one
              in your apps or websites.
            </h6>
          </Valuepage>
        </div>
        <div className="rows">
          <Valuepage>
            <div className="img">
              <button
                className="btn btn-primary"
                style={{
                  backgroundColor: "#0ED984",
                  border: "none",
                  margin: "20px",
                }}
              >
                <img src={Img2} alt="" className="img-fluid" />
              </button>
            </div>
            <h3>Saas Application</h3>
            <h6>
              We will deploy the right SDKs and FinTech tools harnessed from
              ITUMP Libraries for your project.
            </h6>
          </Valuepage>
          <Valuepage>
            <div className="img">
              <button
                className="btn btn-primary"
                style={{
                  backgroundColor: "#880AD6",
                  border: "none",
                  margin: "20px",
                }}
              >
                <img src={Img3} alt="" className="img-fluid" />
              </button>
            </div>
            <h3>e-Commerce</h3>
            <h6>
              Create high revenue generating models in your existing e-commerce
              business or start new one today.
            </h6>
          </Valuepage>
          <Valuepage>
            <div className="img">
              <button
                className="btn btn-primary"
                style={{
                  backgroundColor: "#E2098C",
                  border: "none",
                  margin: "20px",
                }}
              >
                <img src={Img6} alt="" className="img-fluid" />
              </button>
            </div>
            <h3>Crypto BlockChain</h3>
            <h6>
              FInTech and Crypto is our first language, bring your Idea or let
              our team give you one.
            </h6>
          </Valuepage>
          <Valuepage>
            <div className="img">
              <button
                className="btn btn-primary"
                style={{
                  backgroundColor: "#E7D00A",
                  border: "none",
                  margin: "20px",
                }}
              >
                <img src={Img7} alt="" className="img-fluid" />
              </button>
            </div>
            <h3>NFT Platforms</h3>
            <h6>
              Tokenization can be made non fungible and digital assets Tokenized
              on your existing system or new one.
            </h6>
          </Valuepage>
        </div>
      </Container>
    </div>
  );
};

export default Section;
