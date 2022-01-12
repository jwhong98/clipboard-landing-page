import React from "react";
import IOS from "./iOS";
import Mac from "./Mac/Index";
import { Container } from "./ButtonWrapElements";

const ButtonWrap = () => {
  return (
    <Container>
      <IOS />
      <Mac />
    </Container>
  );
};

export default ButtonWrap;
