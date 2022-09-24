import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Img1 from "../img/ellispe.png";
import Img2 from "../img/Ellipse32.png";
import Img3 from "../img/Ellipse33.png";
import Img4 from "../img/Rectangle4245.png";
import star from "../img/star.png";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const Testimonial = () => {
  return (
    <div
      className="align-items-center"
      style={{ position: "relative", height: "100vh" }}
    >
      <img
        src={Img4}
        alt=""
        style={{ position: "relative", height: "100vh" }}
      />
      <div
        className="container px-5"
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="row" style={{ gap: "20px" }}>
          <div className="card col-lg col-sm col-md p-3">
            <div>
              <img src={star} alt="" className="img-fluid" />
            </div>
            <p style={{ fontSize: "15px" }}>
              Blue Kanel HQ is one company that I can totally rely on when it
              comes to creating and maintaining our software. easy team!
            </p>
            <div className="d-flex">
              <img src={Img2} alt="" />
              <div>
                <h4>Fidelis C.</h4>
                <h6>CEO, FIxtops Technologies</h6>
              </div>
            </div>
          </div>
          <div className="card col-lg col-sm col-md p-3">
            <div>
              <img src={star} alt="" className="img-fluid" />
            </div>
            <p>
              Blue Kanel HQ is one company that I can totally rely on when it
              comes to creating and maintaining our software. easy team!
            </p>
            <div className="d-flex">
              <img src={Img3} alt="" />
              <div>
                <h4>Fidelis C.</h4>
                <h6>CEO, FIxtops Technologies</h6>
              </div>
            </div>
          </div>
          <div className="col-lg col-sm col-md">
            <h6 style={{ color: "#e53f70", margin: 0 }}>Testimonial</h6>
            <img src={Img1} alt="" />
            <h1>
              What People <span style={{ color: "#ffb34e" }}>Say About Us</span>
            </h1>
            <div className="d-flex" style={{ gap: "10px" }}>
              <span
                style={{
                  borderRadius: "30px",
                  width: "30px",
                  height: "30px",
                  border: "2px solid #e53f70",
                  backgroundColor: "#fff",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <IoArrowBack style={{ fontSize: "20px", color: "#e53f70" }} />
              </span>
              <span
                style={{
                  borderRadius: "30px",
                  width: "30px",
                  height: "30px",
                  border: "2px solid #e53f70",
                  backgroundColor: "#fff",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <IoArrowForward
                  style={{ fontSize: "20px", color: "#e53f70" }}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
