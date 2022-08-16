import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Img from "../img/projects.PNG";
import Img1 from "../img/Arrow.svg";
import Img2 from "../img/Vector.svg";

const Project = () => {
  return (
    <section className="container text-center mt-5 mb-5">
      <div>
        <h6 style={{ color: "#e53f70" }}>Projects</h6>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={Img1} alt="" />
          <img src={Img2} alt="" />
        </div>
      </div>
      <div className="p-3">
        <h1>
          Our <span style={{ color: "#ffb34e" }}>Portfolio</span>
        </h1>
        <p style={{ color: "#979797" }}>
          Lorem ipsum is simply dummy text of prinitng and typesetting industry.
          Lorem ipsum has been the <br />
          industry's standard dummy text ever since 1500
        </p>
      </div>
      <div className="img-fluid">
        <img src={Img} alt="" className="img img-fluid" />
      </div>
    </section>
  );
};

export default Project;
