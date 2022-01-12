import React from "react";
import { sectionFour } from "../../data/data";
import ButtonWrap from "../ButtonWrap";
import Titles from "../Titles";
import { Container } from "./SectionFourElements";

const SectionFour = () => {
  return (
    <Container>
      <Titles {...sectionFour} />
      <ButtonWrap />
    </Container>
  );
};

export default SectionFour;
