import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import { IoHardwareChipOutline } from "react-icons/io5";
import { GiProtectionGlasses } from "react-icons/gi";
import { GoCreditCard } from "react-icons/go";

const Section = () => {
  return (
    <div className="">
      <Container
        className="mt-5 pt-5 mb-5 pb-5"
        style={{ backgroundColor: "#fff" }}
      >
        <h6 style={{ color: "#e53f70", paddingLeft: "1rem" }}>How It Works</h6>
        <div className="container">
          <Row style={{ gap: "20px" }}>
            <div className="col">
              <div className="pt-3 pb-3">
                <h1>
                  Our<span style={{ color: "#ffb34e" }}> Services</span>
                </h1>
                <p style={{ padding: "0px", color: "#979797" }}>
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
                    className="btn btn-lg disabled mb-2"
                    style={{ backgroundColor: "#0ed984", color: "#fff" }}
                  >
                    <GoCreditCard style={{ fontSize: "30px" }} />
                  </div>
                  <h4>Sass Application</h4>
                  <p style={{ color: "#979797" }}>
                    Leverage ITUMP credit builder for
                    <br /> Business Credit
                  </p>
                </div>
                <div className="p-2 col">
                  <div
                    className="btn btn-lg disabled mb-2"
                    style={{ backgroundColor: "#880ad6", border: "none" }}
                  >
                    <GiProtectionGlasses
                      style={{ fontSize: "35px", color: "#fff" }}
                    />
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
                  <div className="btn btn-lg btn-primary disabled mb-2">
                    <IoHardwareChipOutline style={{ fontSize: "30px" }} />
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
                    className="btn btn-lg disabled mb-2"
                    style={{ backgroundColor: "#0dcfdb", border: "none" }}
                  >
                    <GiProtectionGlasses
                      style={{ fontSize: "35px", color: "#fff" }}
                    />
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
                    className="btn btn-lg disabled mb-2"
                    style={{ backgroundColor: "#e2098c", border: "none" }}
                  >
                    <GiProtectionGlasses
                      style={{ fontSize: "35px", color: "#fff" }}
                    />
                  </div>
                  <h4>Crypto Blockchain</h4>
                  <p style={{ color: "#979797" }}>
                    Get ITUMP easy to use technologies <br />
                    for your Business advantage
                  </p>
                </div>
                <div className="p-2 col">
                  <div
                    className="btn btn-lg disabled mb-2"
                    style={{ backgroundColor: "#e7d00a", border: "none" }}
                  >
                    <GiProtectionGlasses
                      style={{ fontSize: "35px", color: "#fff" }}
                    />
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
