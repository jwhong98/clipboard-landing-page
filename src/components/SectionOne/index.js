import React from "react";
import { itemOne, itemThree, itemTwo, sectionOne } from "../../data/data";
import Titles from "../Titles";
import { Container, Img, List } from "./SectionOneElements";
import img from "../../images/image-computer.png";
import ListItem from "../ListItem";

const SectionOne = () => {
  return (
    <Container>
      <Titles {...sectionOne} />
      <Img src={img} />
      <List>
        <ListItem {...itemOne} />
        <ListItem {...itemTwo} />
        <ListItem {...itemThree} />
      </List>
    </Container>
  );
};

export default SectionOne;
