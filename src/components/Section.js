import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import Img1 from "../img/ellispe.png";
import Img2 from "../img/Application.svg";
import Img3 from "../img/cart.svg";
import Img4 from "../img/AI.svg";
import Img5 from "../img/Glasses.png";
import Img6 from "../img/key.svg";
import Img7 from "../img/nft.svg";

const Section = () => {
  return (
    <div id="Services">
      <Container
        className="mt-5 pt-5 mb-5 pb-5"
        style={{ backgroundColor: "#fff" }}
      >
        <h6 style={{ color: "#e53f70" }}>How It Works</h6>
        <img src={Img1} alt="" />

        <div className="container">
          <Row style={{ gap: "20px" }}>
            <div className="col">
              <div className="pt-3 pb-3">
                <h1>
                  Our<span style={{ color: "#ffb34e" }}> Services</span>
                </h1>
                <p
                  style={{
                    padding: "0px",
                    color: "#979797",
                    textAlign: "justify",
                  }}
                >
                  since we have beeen working with fortune business to create
                  and launch their <br />
                  apps and tech services. lets work with you today to get your
                  new app or invention
                  <br />
                  started together.
                </p>
              </div>
              <Row className="mt-3" style={{ gap: "20px" }}>
                <div
                  className="p-2 col"
                  style={{
                    backgroundColor: "rgb(249, 250, 252)",
                    borderRadius: "10px",
                  }}
                >
                  <div
                    className="btn btn-sm disabled mb-2"
                    style={{
                      backgroundColor: "#0ed984",
                      color: "#fff",
                      borderRadius: "10px",
                    }}
                  >
                    <img src={Img2} alt="" />
                  </div>
                  <h4>Sass Application</h4>
                  <p style={{ color: "#979797" }}>
                    Leverage ITUMP credit builder for
                    <br /> Business Credit
                  </p>
                </div>
                <div className="p-2 col">
                  <div
                    className="btn btn-sm disabled mb-2"
                    style={{
                      backgroundColor: "#880ad6",
                      border: "none",
                      borderRadius: "10px",
                    }}
                  >
                    <img src={Img3} alt="" />
                  </div>
                  <h4>e-Commerce</h4>
                  <p style={{ color: "#979797" }}>
                    All your business essentials in one
                    <br /> place enjoy growth
                  </p>
                </div>
              </Row>
            </div>
            <div className="col mt-3">
              <Row style={{ gap: "20px" }} className="mb-2">
                <div className="p-2 col">
                  <div
                    className="btn btn-sm btn-primary disabled mb-2"
                    style={{ borderRadius: "10px" }}
                  >
                    <img src={Img4} alt="" />
                  </div>
                  <h4>AI Technology</h4>
                  <p style={{ color: "#979797" }}>
                    we willl setup and verify your data <br />
                    across internet
                  </p>
                </div>
                <div
                  className="p-2 col"
                  style={{
                    backgroundColor: "rgb(249, 250, 252)",
                    borderRadius: "10px",
                  }}
                >
                  <div
                    className="btn btn-sm disabled mb-2"
                    style={{
                      backgroundColor: "#0dcfdb",
                      border: "none",
                      borderRadius: "10px",
                    }}
                  >
                    <img src={Img5} alt="" />
                  </div>
                  <h4>VR Technology</h4>
                  <p style={{ color: "#979797" }}>
                    Create Professional business web
                    <br /> and mobile presence
                  </p>
                </div>
              </Row>
              <Row style={{ gap: "20px" }}>
                <div
                  className="p-2 col"
                  style={{
                    backgroundColor: "rgb(249, 250, 252)",
                    borderRadius: "10px",
                  }}
                >
                  <div
                    className="btn btn-sm disabled mb-2"
                    style={{
                      backgroundColor: "#e2098c",
                      border: "none",
                      borderRadius: "10px",
                    }}
                  >
                    <img src={Img6} alt="" />
                  </div>
                  <h4>Crypto Blockchain</h4>
                  <p style={{ color: "#979797" }}>
                    Get ITUMP easy to use technologies <br />
                    for your Business advantage
                  </p>
                </div>
                <div className="p-2 col">
                  <div
                    className="btn btn-sm disabled mb-2"
                    style={{
                      backgroundColor: "#e7d00a",
                      border: "none",
                      borderRadius: "10px",
                    }}
                  >
                    <img src={Img7} alt="" />
                  </div>
                  <h4>NFT Platforms</h4>
                  <p style={{ color: "#979797" }}>
                    We help you focus on running your
                    <br /> business with ease of mind
                  </p>
                </div>
              </Row>
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Section;
