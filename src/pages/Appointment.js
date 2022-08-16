import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Button } from "react-bootstrap";
import { IoArrowForward } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";

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
    padding: 10px;
  }
`;

const Appointment = ({ setShow, setShown }) => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="bg">
      <style>{css}</style>
      <Container
        className="m-5 p-2"
        style={{
          backgroundColor: "#fff",
          justifyContent: "center",
          position: "relative",
          padding: "50px",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: 5,
            right: 10,
          }}
          onClick={() => setShow(false)}
        >
          <AiFillCloseCircle style={{ fontSize: "30px" }} />
        </span>
        <div
          style={{
            textAlign: "center",
            justifyContent: "center",
            display: "grid",
          }}
          className="mb-3 p-2"
        >
          <h1>Make An Appointment</h1>
        </div>
        <div
          className="container"
          style={{ display: "grid", justifyContent: "center" }}
        >
          <div className="row p-2">
            <div className="col mb-3">
              <div style={{ color: "#979797" }}>
                <h4>Select Date</h4>
              </div>
              <Calendar onChange={onChange} value={value} />
            </div>
            <div className="mb-3 col">
              <div style={{ color: "#979797" }}>
                <h4>Select Time</h4>
              </div>
              <Row style={{ gap: "10px" }}>
                <Row className="col" style={{ gap: "20px" }}>
                  <Button
                    className="btn btn-light btn-outline-danger"
                    style={{ color: "#979797", border: "none" }}
                  >
                    10:00AM
                  </Button>
                  <Button
                    className="btn btn-light btn-outline-danger"
                    style={{ color: "#979797", border: "none" }}
                  >
                    11:00AM
                  </Button>
                  <Button
                    className="btn btn-light btn-outline-danger"
                    style={{ color: "#979797", border: "none" }}
                  >
                    12:00PM
                  </Button>
                </Row>
                <Row className="col" style={{ gap: "20px" }}>
                  <Button
                    className="btn btn-light btn-outline-danger"
                    style={{ color: "#979797", border: "none" }}
                  >
                    1:00PM
                  </Button>
                  <Button
                    className="btn btn-light btn-outline-danger"
                    style={{ color: "#979797", border: "none" }}
                  >
                    2:00PM
                  </Button>
                  <Button
                    className="btn btn-light btn-outline-danger"
                    style={{ color: "#979797", border: "none" }}
                  >
                    3:00PM
                  </Button>
                </Row>
                <Row className="col" style={{ gap: "20px" }}>
                  <Button
                    className="btn btn-light btn-outline-danger"
                    style={{ color: "#979797", border: "none" }}
                  >
                    4:00PM
                  </Button>
                  <Button
                    className="btn btn-light btn-outline-danger"
                    style={{ color: "#979797", border: "none" }}
                  >
                    5:00PM
                  </Button>
                  <Button
                    className="btn btn-light btn-outline-danger"
                    style={{ color: "#979797", border: "none" }}
                  >
                    6:00PM
                  </Button>
                </Row>
              </Row>
              <div className="mt-5">
                <div
                  className="alert alert-success h6"
                  role="alert"
                  style={{ backgroundColor: "rgb(197, 253, 211)" }}
                >
                  <strong>Note: </strong> Reserve an appointment with a $250.00
                  deposit
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={() => {
              setShow(false);
              setShown(true);
            }}
            className="btn-md mb-3"
            style={{
              borderRadius: "50px",
              display: "flex",
              gap: "10px",
              alignItems: "center",
              backgroundImage:
                "linear-gradient(-225deg, #ac32e4 26%, #7918f2 78%, #4801ff 100%)",
            }}
          >
            Continue
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
              <IoArrowForward style={{ fontSize: "20px", color: "#000" }} />
            </span>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Appointment;
