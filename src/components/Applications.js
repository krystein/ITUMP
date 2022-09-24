import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Startup from "./Startup";
import { IoArrowForward } from "react-icons/io5";
import { Row, Button } from "react-bootstrap";
import Img1 from "../img/ellispe.png";
import Img2 from "../img/search-1.svg";
import Img3 from "../img/computer.svg";
import Img6 from "../img/ui.svg";
import Img5 from "../img/setting.svg";
import Img4 from "../img/search-2.svg";
import Img7 from "../img/phone.svg";
import Img8 from "../img/deployment.svg";
import Img9 from "../img/circle.svg";
import { useState } from "react";

const Applications = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        style={{
          backgroundColor: "rgb(220, 227, 231)",
        }}
      >
        <section className="container text-center mt-5 p-5">
          <div>
            <h6 style={{ color: "#e53f70" }}>How It Works</h6>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={Img1} alt="" />
            </div>
          </div>
          <div className="p-3">
            <h1>
              Our Process Of{" "}
              <span style={{ color: "#ffb34e" }}>Creating Applications</span>
            </h1>
            <p style={{ color: "#979797" }}>
              The teams at Blue Khanel HQ observe very rigorous routines and
              process to deliver on any project researches <br />
              and testings at different levels are the hallmark of our work
              process.
            </p>
          </div>
          <Row>
            <div className="col">
              <div
                className="p-2 mb-3"
                style={{
                  boxShadow: "0.25rem 0.25rem 3.38rem rgba(217, 217, 217, 0.5)",
                  borderRadius: "10px",
                  backgroundColor: "#fff",
                  height: "150px",
                  display: "grid",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <img src={Img2} alt="" className="img-fluid" width="50" />
                </div>
                <h6 style={{ fontWeight: "700" }}>UX Research</h6>
              </div>
              <div
                className="p-2 mb-3"
                style={{
                  boxShadow: "0.25rem 0.25rem 3.38rem rgba(217, 217, 217, 0.5)",
                  borderRadius: "10px",
                  backgroundColor: "#fff",
                  height: "150px",
                  display: "grid",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <img src={Img5} alt="" className="img-fluid" width="50" />
                </div>
                <h6 style={{ fontWeight: "700" }}>Coding</h6>
              </div>
            </div>
            <div className="col">
              <div
                className="p-2 mb-3"
                style={{
                  boxShadow: "0.25rem 0.25rem 3.38rem rgba(217, 217, 217, 0.5)",
                  borderRadius: "10px",
                  backgroundColor: "#fff",
                  height: "150px",
                  display: "grid",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <img src={Img4} alt="" className="img-fluid" width="50" />
                </div>
                <h6 style={{ fontWeight: "700" }}>Market Research</h6>
              </div>
              <div
                className="p-2 mb-3"
                style={{
                  boxShadow: "0.25rem 0.25rem 3.38rem rgba(217, 217, 217, 0.5)",
                  borderRadius: "10px",
                  backgroundColor: "#fff",
                  height: "150px",
                  display: "grid",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <img src={Img3} alt="" className="img-fluid" width="50" />
                </div>
                <h6 style={{ fontWeight: "700" }}>Testing & QA</h6>
              </div>
            </div>
            <div className="col">
              <div
                className="p-2 mb-3"
                style={{
                  boxShadow: "0.25rem 0.25rem 3.38rem rgba(217, 217, 217, 0.5)",
                  borderRadius: "10px",
                  backgroundColor: "#fff",
                  height: "150px",
                  display: "grid",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <img src={Img7} alt="" className="img-fluid" width="50" />
                </div>
                <h6 style={{ fontWeight: "700" }}>Usability Testing</h6>
              </div>
              <div
                className="p-2 mb-3"
                style={{
                  boxShadow: "0.25rem 0.25rem 3.38rem rgba(217, 217, 217, 0.5)",
                  borderRadius: "10px",
                  backgroundColor: "#fff",
                  height: "150px",
                  display: "grid",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <img src={Img8} alt="" className="img-fluid" width="50" />
                </div>
                <h6 style={{ fontWeight: "700" }}>Deployment</h6>
              </div>
            </div>
            <div className="col">
              <div
                className="p-2 mb-3"
                style={{
                  boxShadow: "0.25rem 0.25rem 3.38rem rgba(217, 217, 217, 0.5)",
                  borderRadius: "10px",
                  backgroundColor: "#fff",
                  height: "150px",
                  display: "grid",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <img src={Img6} alt="" className="img-fluid" width="50" />
                </div>
                <h6 style={{ fontWeight: "700" }}>UI And Mock-Up</h6>
              </div>
              <div
                className="p-2 mb-3"
                style={{
                  boxShadow: "0.25rem 0.25rem 3.38rem rgba(217, 217, 217, 0.5)",
                  borderRadius: "10px",
                  backgroundColor: "#fff",
                  height: "150px",
                  display: "grid",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <img src={Img9} alt="" className="img-fluid" width="50" />
                </div>
                <h6 style={{ fontWeight: "700" }}>Continous Update</h6>
              </div>
            </div>
          </Row>
          <div
            className="mt-5"
            style={{ display: "flex", justifyContent: "center" }}
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
                Start Consultations
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
          </div>
        </section>
      </div>
      <section>{show && <Startup setShow={setShow} />}</section>
    </>
  );
};

export default Applications;
