import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Row } from "react-bootstrap";
import { AiFillAndroid, AiFillCloseCircle } from "react-icons/ai";
import { IoCopy } from "react-icons/io5";
import Img from "../img/celebrate.PNG";
import { BsApple } from "react-icons/bs";
const css = `
  .bg{
    background-color: #00000088;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Congratulations = ({ setShowing }) => {
  return (
    <div className="bg p-4">
      <style>{css}</style>
      <Container
        style={{
          paddingTop: "50px",
          justifyContent: "center",
          backgroundColor: "#fff",
          position: "relative",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: 5,
            right: 10,
          }}
          onClick={() => setShowing(false)}
        >
          <AiFillCloseCircle style={{ fontSize: "30px" }} />
        </span>
        <div
          style={{
            textAlign: "center",
            display: "grid",
            justifyContent: "center",
          }}
        >
          <div className="m-3">
            <img src={Img} alt="" />
          </div>
          <h1 className="m-3" style={{ fontWeight: "800" }}>
            Congratulations!
          </h1>
          <h5 style={{ color: "#979797" }} className="m-3">
            you have successfully created a new account, download our mobile app
            to
            <br />
            continue, it's easier on our mobile platform
          </h5>
          <div className="mb-3">
            <h4
              style={{
                alignItems: "center",
                fontWeight: "600",
                fontSize: "20px",
              }}
            >
              Account ID:{" "}
              <span
                style={{
                  borderRadius: 5,
                  backgroundColor: "#f7fafc",
                  fontSize: "clamp(0.7rem,8vw,0.9rem)",
                  padding: "8px",
                  width: 30,
                  height: 30,
                  color: "#7861ff",
                }}
              >
                J1929903DC
              </span>
              <button
                className="m-2"
                style={{
                  backgroundColor: "#7861ff",
                  borderRadius: 5,
                  border: "none",
                  width: 30,
                  height: 30,
                }}
              >
                <IoCopy style={{ color: "#fff", fontSize: "20px" }} />
              </button>
            </h4>
          </div>
          <h5 style={{ color: "#979797" }}>
            Copy your Account ID, you will need it to Continue
          </h5>
          <div>
            <div
              style={{
                textAlign: "center",
                justifyContent: "center",
                display: "flex",
              }}
              className="mb-3 mt-5"
            >
              <Row
                style={{
                  gap: "20px",
                  margin: "0",
                  display: "flex",
                  justifyContent: "center",
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
      </Container>
    </div>
  );
};

export default Congratulations;
