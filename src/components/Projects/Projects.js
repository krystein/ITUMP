import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Img from "../../img/ellispe.png";
import Img1 from "../../img/Group-1.png";
import Img2 from "../../img/Group-2.png";
import Img3 from "../../img/Group22.png";
import Img4 from "../../img/Group23.png";
import Img5 from "../../img/Group-5.png";
import Img6 from "../../img/Group-6.png";
import "./projects.css";

const Project = () => {
  return (
    <section className="container text-center mt-5 mb-5 p-5" id="Portfolio">
      <div>
        <h6 style={{ color: "#e53f70" }}>Projects</h6>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={Img} alt="" />
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
      <div className="row">
        <div className="col-lg col-sm col-md ">
          <div className="col-lg col-sm col-md">
            <img src={Img1} alt="" className="img-fluid hovering" />
          </div>
          <div className="col-lg col-sm col-md">
            <img src={Img4} alt="" className="img-fluid hovering" />
          </div>
        </div>
        <div className="col-lg col-sm col-md ">
          <div className="col-lg col-sm col-md pt-5">
            <img src={Img2} alt="" className="img-fluid hovering" />
          </div>
          <div className="col-lg col-sm col-md pt-3">
            <img src={Img5} alt="" className="img-fluid hovering" />
          </div>
        </div>
        <div className="col-lg col-sm col-md ">
          <div className="col-lg col-sm col-md mb-3 ">
            <img src={Img3} alt="" className="img-fluid hovering" />
          </div>
          <div className="col-lg col-sm col-md">
            <img src={Img6} alt="" className="img-fluid hovering" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
