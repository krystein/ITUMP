import React, { useState } from "react";

//import components
import styled from "styled-components";
import { menuData } from "../../data/MenuData";
import { FaBars } from "react-icons/fa";
import "./navbar.css";

const Logo = styled.a`
color: #fff;
display: flex;
align-items: center;
padding: 0 1rem;
font-size: 1.5rem;
font-family: inter, sans-serif;
height: 100%
cursor: pointer;
text-decoration: none;
h1{
  &:hover {
    color: #e53f70;
    transform: scale(1.05);
  }
  font-size: clamp(1.8rem, 8vw, 1.2rem);
  cursor: pointer;
  }

`;

const MenuBar = styled(FaBars)`
  display: none;
  @media Screen and (max-width: 1200px) {
    display: block;
    background-size: contain;
    height: 35px;
    width: 30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
    color: #fff;
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 48px;
  @media Screen and (max-width: 1200px) {
    display: none;
  }
`;
const NavMenuLink = styled.a`
  cursor: pointer;
  color: #fff;
display: flex;
align-items: center;
padding: 0 1rem;
font-size: 1rem;
font-family: inter, sans-serif;
height: 100%
cursor: pointer;
text-decoration: none;
:hover{
    color: #e53f70;
}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
  gap: 20px;
  a {
    text-decoration: none;
  }
  button {
    background-color: transparent;
    border: 2px solid #e53f70;
    border-radius: 20px;
    height: 40px;
    width: 100px;
    color: #e53f70;
    font-family: Share Tech;
    font-size: 18px;
    font-weight: 400;
    user-select: none;
    -webkit-transition: color 0.15s ease-in-out,
      background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:hover {
      background: #e53f70;
      transform: scale(1.05);
      border: #e53f70;
      color: #fff;
    }
  }
  div {
    margin-right: 30px;
  }
  .img {
    width: 20px;
  }
  @media Screen and (max-width: 1200px) {
    display: none;
  }
  @media Screen and (max-width: 768px) {
    display: none;
  }
  @media Screen and (max-width: 480px) {
    display: none;
  }
`;

const Navbar = ({ toggle }) => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <nav className={colorChange ? "Itump active" : "Itump"}>
      <Logo href="/">
        <img src="" alt="" />
        <h1>ITUMP</h1>
      </Logo>
      <MenuBar onClick={toggle} />
      <div style={{ display: "flex" }}>
        <NavMenu>
          {menuData.map((item, index) => {
            return (
              <NavMenuLink href={item.link} key={index}>
                {item.title}
              </NavMenuLink>
            );
          })}
        </NavMenu>
        <NavBtn>
          <a href="#">
            <button>Sign in</button>
          </a>
        </NavBtn>
      </div>
    </nav>
  );
};

export default Navbar;
