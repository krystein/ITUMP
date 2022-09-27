import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoArrowForward } from "react-icons/io5";

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

const Registration = ({ setShow }) => {
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
            top: 30,
            right: 30,
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
          className="mb-3"
        >
          <h1>Registration</h1>
        </div>
        <Form>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label style={{ fontWeight: "500", color: "#9CA3AC" }}>
                  First Name
                </Form.Label>
                <Form.Control
                  type="text"
                  style={{
                    backgroundColor: "rgb(227, 244, 255)",
                    border: "none",
                  }}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label style={{ fontWeight: "500", color: "#9CA3AC" }}>
                  Last Name
                </Form.Label>
                <Form.Control
                  type="text"
                  style={{
                    backgroundColor: "rgb(227, 244, 255)",
                    border: "none",
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label style={{ fontWeight: "500", color: "#9CA3AC" }}>
                  Email
                </Form.Label>
                <Form.Control
                  type="email"
                  style={{
                    backgroundColor: "rgb(227, 244, 255)",
                    border: "none",
                  }}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label style={{ fontWeight: "500", color: "#9CA3AC" }}>
                  Phone Number
                </Form.Label>
                <Form.Control
                  type="tel"
                  style={{
                    backgroundColor: "rgb(227, 244, 255)",
                    border: "none",
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-2">
            <Form.Group>
              <Form.Label style={{ fontWeight: "500", color: "#9CA3AC" }}>
                Address
              </Form.Label>
              <Form.Control
                type="text"
                style={{
                  backgroundColor: "rgb(227, 244, 255)",
                  border: "none",
                }}
              />
            </Form.Group>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label style={{ fontWeight: "500", color: "#9CA3AC" }}>
                  City
                </Form.Label>
                <Form.Control
                  type="email"
                  style={{
                    backgroundColor: "rgb(227, 244, 255)",
                    border: "none",
                  }}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label style={{ fontWeight: "500", color: "#9CA3AC" }}>
                  State
                </Form.Label>
                <Form.Control
                  type="tel"
                  style={{
                    backgroundColor: "rgb(227, 244, 255)",
                    border: "none",
                  }}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label style={{ fontWeight: "500", color: "#9CA3AC" }}>
                  Zip/Postal Code
                </Form.Label>
                <Form.Control
                  type="tel"
                  style={{
                    backgroundColor: "rgb(227, 244, 255)",
                    border: "none",
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-2">
            <Form.Group
              className="d-flex align-items-baseline justify-content-flex-start"
              style={{ gap: "10px" }}
            >
              <input type="checkbox" required />
              <Form.Label style={{ fontWeight: "500", color: "#9CA3AC" }}>
                Check this button to agree to our Terms of Service.
              </Form.Label>
            </Form.Group>
          </Row>
          <div
            className="mt-5 mb-3"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              className="btn-md"
              style={{
                borderRadius: "50px",
                display: "flex",
                gap: "10px",
                alignItems: "center",
                backgroundImage:
                  "linear-gradient(-225deg, #ac32e4 26%, #7918f2 78%, #4801ff 100%)",
              }}
            >
              Submit
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
        </Form>
      </Container>
    </div>
  );
};

export default Registration;
