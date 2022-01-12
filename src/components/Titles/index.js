import React from "react";
import { Container, TextWrap, Title, Description } from "./TitlesElements";

const Titles = (props) => {
  return (
    <Container>
      <TextWrap>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
      </TextWrap>
    </Container>
  );
};

export default Titles;
