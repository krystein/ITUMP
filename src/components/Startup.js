import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Row, Button, Col } from "react-bootstrap";
import { IoArrowForward } from "react-icons/io5";
import Image from "../img/Contact.PNG";
import "../pages/calendar.css";
import Appointment from "../pages/Appointment";
import Congratulations from "../pages/Congratulations";
import Billing from "../pages/Billing";
import Img1 from "../img/ellispe.png";
import { Link } from "react-router-dom";

const Startup = () => {
  const [show, setShow] = useState(false);
  const [showing, setShowing] = useState(false);
  const [shown, setShown] = useState(false);
  return (
    <Container
      className="mb-5 pb-5"
      style={{ paddingTop: "80px" }}
      id="Getstarted"
    >
      <div className="container">
        <div className="row">
          <div className="col mb-3">
            <div>
              <h6 style={{ color: "#e53f70", paddingLeft: "30px" }}>Startup</h6>
              <div style={{ display: "flex" }}>
                <img src={Img1} alt="" />
              </div>
            </div>
            <div
              className="container"
              style={{
                width: "500px",
                maxWidth: "100%",
                lineHeight: "1.125em",
              }}
            >
              <h1 style={{ fontWeight: "800" }}>
                Lets Scale Your <br />
                <span style={{ color: "#ffb34e" }}>Startup, Together</span>
              </h1>
              <img src={Image} alt="" className="img img-fluid" />
            </div>
          </div>
          <div className="container mb-3 col">
            <div
              style={{
                textAlign: "center",
                justifyContent: "center",
                display: "grid",
              }}
              className="mb-3"
            >
              <p
                style={{
                  backgroundColor: "rgb(197, 253, 211)",
                  padding: "10px 30px",
                  color: "rgb(28, 170, 63)",
                  fontWeight: "500",
                  borderRadius: "20px ",
                }}
              >
                Note: Reserve an appointment with a $250.00 deposit
              </p>
            </div>
            <Row style={{ maxWidth: "120%" }}>
              <Row className="col" style={{ maxWidth: "120%" }}>
                <Form>
                  <Col>
                    <Form.Group>
                      <Form.Label style={{ color: "#979797" }}>
                        Full Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        style={{
                          backgroundColor: "#f7f9fc",
                          border: "none",
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label style={{ color: "#979797" }}>
                        Phone Number
                      </Form.Label>
                      <Form.Control
                        type="number"
                        style={{
                          backgroundColor: "#f7f9fc",
                          border: "none",
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label style={{ color: "#979797" }}>
                        Email ID
                      </Form.Label>
                      <Form.Control
                        type="email"
                        style={{
                          backgroundColor: "#f7f9fc",
                          border: "none",
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group style={{ display: "grid" }}>
                      <Form.Label style={{ color: "#979797" }}>
                        Tell us briefly about your app
                      </Form.Label>
                      <textarea
                        style={{
                          backgroundColor: "#f7f9fc",
                          border: "none",
                          height: "120px",
                          padding: "10px",
                        }}
                      ></textarea>
                    </Form.Group>
                  </Col>
                  <h6
                    className="mt-4 mb-2"
                    style={{ fontWeight: "500", color: "#979797" }}
                  >
                    We are bound by our standard Non-Disclosure Agreement, which
                    helps to protect your proprietary ideas from being disclosed
                    by our team or anyone in our circle.
                  </h6>
                  <Link to="/" style={{ textDecorationColor: "#e53f70" }}>
                    <h6
                      className="mt-4 mb-2"
                      style={{ fontWeight: "500", color: "#e53f70" }}
                    >
                      Download A Copy
                    </h6>
                  </Link>
                  <h6
                    className="mt-4 mb-2"
                    style={{ fontWeight: "800", color: "#979797" }}
                  >
                    What are we building today?
                  </h6>
                  <Row>
                    <Col>
                      <div className="form-check form-check-inline">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label h6">AI Tech</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label h6">
                          Crypto Blockchain
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label h6">
                          Mobile Technologies
                        </label>
                      </div>
                    </Col>
                    <Col>
                      <div className="form-check form-check-inline">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label h6">VR Tech</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label h6">
                          PWA Services
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label h6">
                          Embedded Systems
                        </label>
                      </div>
                    </Col>
                    <Col>
                      <div className="form-check form-check-inline">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label h6">
                          NFT Platforms
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label h6">
                          ML/Data System
                        </label>
                      </div>
                    </Col>
                  </Row>
                  <div
                    className="mt-5"
                    style={{ display: "flex", justifyContent: "start" }}
                  >
                    <div>
                      <Button
                        onClick={() => {
                          setShow(true);
                        }}
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
                </Form>
              </Row>
            </Row>
          </div>
        </div>
      </div>
      {show && <Appointment setShow={setShow} setShown={setShown} />}
      {shown && <Billing setShown={setShown} setShowing={setShowing} />}
      {showing && <Congratulations setShowing={setShowing} />}
    </Container>
  );
};

export default Startup;
