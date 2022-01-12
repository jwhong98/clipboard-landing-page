import React from "react";
import { sectionTwo } from "../../data/data";
import Titles from "../Titles";
import img from "../../images/image-devices.png";
import { Container, Img } from "./SectionTwoElements";

const SectionTwo = () => {
  return (
    <Container>
      <Titles {...sectionTwo} />
      <Img src={img} />
    </Container>
  );
};

export default SectionTwo;
