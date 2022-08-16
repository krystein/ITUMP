import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from "react-bootstrap";
import { GiProtectionGlasses } from "react-icons/gi";
import Img1 from "../img/Arrow.svg";
import Img2 from "../img/Vector.svg";

const Applications = () => {
  return (
    <div style={{ backgroundColor: "rgb(220, 227, 231)" }}>
      <section className="container text-center mt-5 mb-5 p-5">
        <div>
          <h6 style={{ color: "#e53f70" }}>How It Works</h6>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={Img1} alt="" />
            <img src={Img2} alt="" />
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
              }}
            >
              <div>
                <GiProtectionGlasses
                  style={{
                    fontSize: "35px",
                    color: "#70a2eb",
                  }}
                />
              </div>
              <h6 style={{ fontWeight: "700" }}>UX Research</h6>
            </div>
            <div
              className="p-2 mb-3"
              style={{
                boxShadow: "0.25rem 0.25rem 3.38rem rgba(217, 217, 217, 0.5)",
                borderRadius: "10px",
                backgroundColor: "#fff",
              }}
            >
              <div>
                <GiProtectionGlasses
                  style={{
                    fontSize: "35px",
                    color: "#70a2eb",
                  }}
                />
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
              }}
            >
              <div>
                <GiProtectionGlasses
                  style={{
                    fontSize: "35px",
                    color: "#57da65",
                  }}
                />
              </div>
              <h6 style={{ fontWeight: "700" }}>Market Research</h6>
            </div>
            <div
              className="p-2 mb-3"
              style={{
                boxShadow: "0.25rem 0.25rem 3.38rem rgba(217, 217, 217, 0.5)",
                borderRadius: "10px",
                backgroundColor: "#fff",
              }}
            >
              <div>
                <GiProtectionGlasses
                  style={{
                    fontSize: "35px",
                    color: "#57da65",
                  }}
                />
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
              }}
            >
              <div>
                <GiProtectionGlasses
                  style={{
                    fontSize: "35px",
                    color: "#e5a646",
                  }}
                />
              </div>
              <h6 style={{ fontWeight: "700" }}>Usability Testing</h6>
            </div>
            <div
              className="p-2 mb-3"
              style={{
                boxShadow: "0.25rem 0.25rem 3.38rem rgba(217, 217, 217, 0.5)",
                borderRadius: "10px",
                backgroundColor: "#fff",
              }}
            >
              <div>
                <GiProtectionGlasses
                  style={{
                    fontSize: "35px",
                    color: "#e5a646",
                  }}
                />
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
              }}
            >
              <div>
                <GiProtectionGlasses
                  style={{
                    fontSize: "35px",
                    color: "#1dbee0",
                  }}
                />
              </div>
              <h6 style={{ fontWeight: "700" }}>UI And Mock-Up</h6>
            </div>
            <div
              className="p-2 mb-3"
              style={{
                boxShadow: "0.25rem 0.25rem 3.38rem rgba(217, 217, 217, 0.5)",
                borderRadius: "10px",
                backgroundColor: "#fff",
              }}
            >
              <div>
                <GiProtectionGlasses
                  style={{
                    fontSize: "35px",
                    color: "#1dbee0",
                  }}
                />
              </div>
              <h6 style={{ fontWeight: "700" }}>Continous Update</h6>
            </div>
          </div>
        </Row>
      </section>
    </div>
  );
};

export default Applications;
