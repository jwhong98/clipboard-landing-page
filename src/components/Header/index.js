import React from "react";
import {
  HeadContainer,
  Logo,
  TextWrap,
  Title,
  Description,
} from "./HeaderElements";
import img from "../../images/logo.svg";
import ButtonWrap from "../ButtonWrap";

const Header = () => {
  return (
    <HeadContainer>
      <Logo src={img} />
      <TextWrap>
        <Title>A history of everything you copy</Title>
        <Description>
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </Description>
      </TextWrap>
      <ButtonWrap />
    </HeadContainer>
  );
};

export default Header;
