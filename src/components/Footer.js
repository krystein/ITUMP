import React from "react";

//import components
import styled from "styled-components";
import Image1 from "../img/telephone.png";
import Image2 from "../img/Email.svg";
import { BsYoutube, BsPinterest } from "react-icons/bs";
import { AiTwotoneHome } from "react-icons/ai";
import { MdPhoneInTalk } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FooterContainer = styled.section`
  width: 100%;
`;
const Footercontent = styled.div`
  padding: 70px 100px;
  padding-bottom: 40px;
  background-color: #031930;
  display: flex;
  justify-content: space-evenly;
  @media Screen and (max-width: 768px) {
    display: grid;
    justify-content: space-between;
    padding-left: 30px;
  }
`;
const Footercontent1 = styled.div`
  background-color: #092342;
  color: #446489;
  text-align: center;
  padding: 10px;
  h4 {
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0.02em;
    text-align: center;
  }
`;
const Footerpage = styled.div`
  line-height: 40px;
  padding: 10px;
  color: #fff;
  @media Screen and (max-width: 768px) {
    line-height: 30px;
    margin-bottom: 10px;
  }
  div {
    font-family: Inter, sans-serif;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
    display: flex;
    align-items: center;
  }
  .mail {
    text-decoration: underline;
  }
`;
const Footerpage2 = styled.div`
  padding: 10px;
  color: #fff;
  @media Screen and (max-width: 768px) {
    line-height: 30px;
    margin-bottom: 20px;
  }
  h2,
  h3 {
    font-family: Inter, sans-serif;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0em;
    text-align: left;
    color: #fff;
    line-height: 2rem;
    @media Screen and (max-width: 768px) {
      line-height: 30px;
    }
  }
  h2 {
    font-size: 16px;
  }
`;
const Footerpage3 = styled.div`
  padding: 10px;
  width: 50%;
  color: #fff;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
  .btn {
    background-color: #ff9f0d;
    border: none;
    border-radius: 0px 10px 8px 10px;
    height: 40px;
    width: 100px;
    color: #fff;
    font-weight: 500;
    letter-spacing: 0em;
    text-align: center;
    font-family: Share Tech;
    font-size: 14px;
  }
  h2 {
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
  }
  p {
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #fff;
  }
`;
const Logo = styled.div`
  padding: 10px;
  img {
    width: 50px;
  }
`;
const Social = styled.div`
  button {
    background: transparent;
    border: 2px solid hsla(207, 64%, 22%, 0.5);
    border-radius: 40px;
    width: 40px;
    height: 40px;
    margin-right: 5px;
    cursor: pointer;
    color: hsla(207, 64%, 22%, 0.5);
    &:hover {
      color: #fff;
      transform: scale(1.05);
      background: linear-gradient(
        -225deg,
        #ac32e4 26%,
        #7918f2 78%,
        #4801ff 100%
      );
    }
    img {
      width: 20px;
    }
    .btn1 {
      width: 10px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Footercontent>
        <Footerpage3>
          <Logo to="/">ITUMP</Logo>
          <h6 style={{ lineHeight: "1.5rem" }}>
            World's Most Inventive FinTech/B-Tech Service Platform for the Next-
            Gen of Innovative Businesses and Startups. ITUMP INC Brings Decades
            of experience in the technology and the ffinance industry to reduce
            the long wait in Startups and SMEs high-end finace and tech access
            approvals plus huge grant of technology tools at a highly reduced
            risks level and acquisition cost.
          </h6>
          <Social>
            <button>
              <FaFacebookF style={{ fontSize: "25px" }} />
            </button>
            <button>
              <FaTwitter style={{ fontSize: "25px" }} />
            </button>
            <button>
              <BsYoutube style={{ fontSize: "25px" }} />
            </button>
            <button>
              <FaInstagram style={{ fontSize: "25px" }} />
            </button>
            <button>
              <BsPinterest style={{ fontSize: "25px" }} />
            </button>
          </Social>
        </Footerpage3>
        <Footerpage2>
          <h4>Quick Links</h4>
          <h3>Pay with Itump</h3>
          <h3>Business</h3>
          <h3>Developers</h3>
          <h3>Company</h3>
          <h3>Support</h3>
        </Footerpage2>
        <Footerpage>
          <h4>Help</h4>
          <div className="mb-1">
            <div
              className="rounded-circle "
              style={{
                border: "2px solid hsla(207, 64%, 22%, 0.5)",
                height: "30px",
                width: "30px",
                justifyContent: "center",
              }}
            >
              <AiTwotoneHome
                style={{ color: "hsla(207, 64%, 22%, 0.5)", fontSize: "20px" }}
              />
            </div>
            24 Capano Dr STE 4A, Newark, DE 19702
          </div>
          <div className="mail mb-1">
            <div
              className="rounded-circle "
              style={{
                border: "2px solid hsla(207, 64%, 22%, 0.5)",
                height: "30px",
                width: "30px",
                justifyContent: "center",
              }}
            >
              <img src={Image2} alt="" />
            </div>
            mgt@itump.com
          </div>
          <div className="mb-1">
            <div
              className="rounded-circle"
              style={{
                border: "2px solid hsla(207, 64%, 22%, 0.5)",
                height: "30px",
                width: "30px",
                justifyContent: "center",
              }}
            >
              <MdPhoneInTalk
                style={{ color: "hsla(207, 64%, 22%, 0.5)", fontSize: "20px" }}
              />
            </div>
            (302)985-9406
          </div>
          <div className="mb-1">
            <div
              className="rounded-circle"
              style={{
                border: "2px solid hsla(207, 64%, 22%, 0.5)",
                height: "30px",
                width: "30px",
                justifyContent: "center",
                fontSize: "20px",
                color: "hsla(207, 64%, 22%, 0.5)",
              }}
            >
              <div style={{ width: "15px", height: "15px" }}>
                <img src={Image1} alt="" className="img img-fluid" />
              </div>
            </div>
            (302)985-9413
          </div>
        </Footerpage>
      </Footercontent>
      <Footercontent1>
        <h4>
          <span style={{ padding: "0px 20px" }}>
            Copyright © 2021 ITUMP All Right Of Reserved.
          </span>
          <span
            style={{ borderLeft: "3px solid #446489", padding: "0px 20px" }}
          >
            Privacy Policy
          </span>
          <span
            style={{ borderLeft: "3px solid #446489", padding: "0px 20px" }}
          >
            Legal
          </span>
        </h4>
      </Footercontent1>
    </FooterContainer>
  );
};

export default Footer;
