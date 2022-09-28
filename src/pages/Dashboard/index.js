import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./Sidebar";
import Navbar from "./Navbar";
import styled, { css } from "styled-components";
import Dropdown from "./Dropdown";
import { FaTimes } from "react-icons/fa";

const Indexcontent = styled.div`
  width: 20%;
  height: 100vh;
  background: #000066;
  display: grid;
  grid-template-column: 1fr;
  grid-template-row: repeat(4, 80px);
  text-align: center;
  margin-bottom: 3rem;
  position: fixed;
  @media screen and (max-width: 1200px) {
    background: transparent;
  }
`;
const Indexcontent1 = styled.div`
  margin-left: 20%;
  position: relative;
  z-index: -1;
  width: 100%;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
`;
const Icon = styled.div`
  position: absolute;
  top: 1rem;
  right: -24rem;
  background: transparent;
  font-size: 2rem;
  cusrsor: pointer;
  z-index: 1001;
`;
const sideBarStyle = css`
  display: none;
  @media Screen and (max-width: 1200px) {
    display: block;
    background-size: contain;
    height: 50px;
    width: 40px;
    cursor: pointer;
    position: fixed;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
    color: #000d1a;
    z-index: 999;
  }
  @media Screen and (max-width: 768px) {
    height: 40px;
    width: 30px;
  }
  @media Screen and (max-width: 480px) {
    height: 30px;
    width: 30px;
  }
`;
const CloseIcon = styled(FaTimes)`
  ${sideBarStyle}
  color: #000d1a;
`;

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div style={{ width: "100%", height: "100vh", display: "flex" }}>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Indexcontent>
        {isOpen && (
          <Icon>
            <CloseIcon onClick={toggle} />
          </Icon>
        )}
        {isOpen || <SideBar toggle={toggle} />}
      </Indexcontent>
      <Indexcontent1>
        <Navbar />
      </Indexcontent1>
    </div>
  );
};

export default Index;
