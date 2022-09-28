import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

//import components
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import Img1 from "../../img/logo.png";
import Img2 from "../../img/category.svg";
import Img3 from "../../img/document.svg";
import Img4 from "../../img/Message.svg";
import Img5 from "../../img/Chat.svg";
import Img6 from "../../img/Notification.svg";

//css
const SideBarContainer = styled.section``;
const Logo = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  font-size: 1.5rem;
  font-family: inter, sans-serif;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  h1 {
    &:hover {
      color: #e53f70;
      transform: scale(1.05);
    }
    font-size: clamp(1rem, 8vw, 1.2rem);
    cursor: pointer;
  }
`;
const sideBarStyle = `
display: none;
@media Screen and (max-width: 1200px){
    display: block;
    background-size: contain;
    height: 50px;
    width: 40px;
    cursor: pointer;
    position: fixed;
    top: 0;
    right: 0;
    transform: translate(-50%,25%);
    color: #000d1a;
    z-index: 999;
}
@media Screen and (max-width: 768px){
    height: 40px;
    width: 30px;
}
@media Screen and (max-width: 480px){
    height: 30px;
    width: 30px;
}
`;

const SideBar = styled(FaBars)`
  ${sideBarStyle}
`;

const SideMenu = styled.div`
  display: grid;
  grid-template-rows: 1fr 4fr 2fr;
  justify-content: center;
  height: 100vh;
  @media Screen and (max-width: 1200px) {
    display: none;
  }
  button {
    border: none;
    background-color: transparent;
    color: #9999c2;
    width: 100%;
    cursor: pointer;
    &:hover {
      color: #fff;
      background-color: #00ccff;
      transform: scale(1);
      transition: 0.5s ease-in-out;
    }
  }
`;

const Sidebar = ({ toggle }) => {
  return (
    <SideBarContainer>
      <SideBar onClick={toggle} />
      <SideMenu>
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          className="d-flex justify-content-center"
        >
          <Logo>
            <img src={Img1} alt="" className="img-fluid" />
          </Logo>
        </Link>
        <div style={{ alignItems: "center" }}>
          <Link to="/">
            <button className="p-3">
              <div
                className="d-flex justify-content-start"
                style={{ gap: "10px", alignItems: "center" }}
              >
                <img src={Img2} alt="" className="img-fluid" />
                <h5 style={{ marginBottom: "0px", fontSize: "20px" }}>
                  Dashboard
                </h5>
              </div>
            </button>
          </Link>
          <Link to="/">
            <button className="p-3">
              <div
                className="d-flex justify-content-start"
                style={{ gap: "10px", alignItems: "center" }}
              >
                <img src={Img3} alt="" className="img-fluid" />
                <h5 style={{ marginBottom: "0px", fontSize: "20px" }}>
                  Projects
                </h5>
              </div>
            </button>
          </Link>
        </div>
        <div
          className="container"
          style={{
            color: "#fff",
          }}
        >
          <div>
            <h6>Insights</h6>
          </div>
          <div className="row" style={{ gridGap: "20px" }}>
            <div
              className="d-flex"
              style={{ gap: "20px", alignItems: "center" }}
            >
              <img src={Img4} alt="" className="img-fluid" />
              <h5 style={{ marginBottom: "0px" }}>Inbox</h5>
            </div>
            <div
              className="d-flex"
              style={{ gap: "20px", alignItems: "center" }}
            >
              <img src={Img6} alt="" className="img-fluid" />
              <h5 style={{ marginBottom: "0px" }}>Notification</h5>
            </div>
            <div
              className="d-flex"
              style={{ gap: "20px", alignItems: "center" }}
            >
              <img src={Img5} alt="" className="img-fluid" />
              <h5 style={{ marginBottom: "0px" }}>Comments</h5>
            </div>
          </div>
        </div>
      </SideMenu>
    </SideBarContainer>
  );
};

export { sideBarStyle };

export default Sidebar;
