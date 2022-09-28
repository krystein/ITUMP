import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import {
  SiMastercard,
  SiVisa,
  SiAmericanexpress,
  SiApple,
} from "react-icons/si";
import { BsPaypal } from "react-icons/bs";
import { IoArrowForward } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";

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

const Billing = ({ setShown, setShowing }) => {
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
          onClick={() => setShown(false)}
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
          <h1>Billing Address</h1>
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
        <div
          style={{
            textAlign: "center",
            justifyContent: "start",
            display: "flex",
          }}
          className="mb-3"
        >
          <Row
            style={{
              gap: "40px",
              margin: "0",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              style={{
                backgroundColor: "rgb(227, 244, 255)",
                color: "red",
                width: "130px",
                border: "none",
                height: "50px",
                fontSize: "30px",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <SiMastercard />
            </Button>
            <Button
              style={{
                backgroundColor: "rgb(227, 244, 255)",
                color: "blue",
                width: "130px",
                border: "none",
                height: "50px",
                fontSize: "30px",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <BsPaypal />
            </Button>
            <Button
              style={{
                backgroundColor: "rgb(227, 244, 255)",
                color: "blue",
                width: "130px",
                border: "none",
                height: "50px",
                fontSize: "30px",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <SiVisa />
            </Button>
            <Button
              style={{
                backgroundColor: "rgb(227, 244, 255)",
                color: "blue",
                width: "130px",
                border: "none",
                height: "50px",
                fontSize: "30px",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <SiAmericanexpress />
            </Button>
            <Button
              style={{
                backgroundColor: "rgb(227, 244, 255)",
                color: "black",
                width: "130px",
                border: "none",
                height: "50px",
                fontSize: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <SiApple />
              Apple
            </Button>
            <Button
              style={{
                backgroundColor: "rgb(227, 244, 255)",
                color: "yellow",
                width: "130px",
                border: "none",
                height: "50px",
                fontSize: "30px",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <SiMastercard />
            </Button>
          </Row>
        </div>
        <Form>
          <Row className="mb-2">
            <Form.Group>
              <Form.Label style={{ fontWeight: "500", color: "#9CA3AC" }}>
                CardHolder Name
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
          <Row className="mb-2">
            <Form.Group>
              <Form.Label style={{ fontWeight: "500", color: "#9CA3AC" }}>
                Card Number
              </Form.Label>
              <Form.Control
                type="number"
                className=""
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
                  Date
                </Form.Label>
                <Form.Control
                  type="date"
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
                  CVV
                </Form.Label>
                <Form.Control
                  type="number"
                  style={{
                    backgroundColor: "rgb(227, 244, 255)",
                    border: "none",
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
          <div
            className="mt-5 mb-3"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              onClick={() => {
                setShown(false);
                setShowing(true);
              }}
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
                <IoArrowForward style={{ fontSize: "20px", color: "#000" }} />
              </span>
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Billing;
