import React from "react";
import Hero from "./Hero";
import styled from "styled-components";
import Section from "./Section";
import Project from "./Projects/Projects";
import Applications from "./Applications";
import Card from "./Card";
import Testimonial from "./Testimonial";
import { AnimationOnScroll } from "react-animation-on-scroll";
const Indexcontainer = styled.section`
  padding-top: 0px;
`;

const Index = () => {
  return (
    <Indexcontainer>
      <Hero />
      <Section />
      <AnimationOnScroll animateIn="bounceIn">
        <Card />
      </AnimationOnScroll>
      <Project />
      <Applications />
      <Testimonial />
    </Indexcontainer>
  );
};

export default Index;
