import React from "react";
import { itemFive, itemFour, itemSix, sectionThree } from "../../data/data";
import ListItem from "../ListItem";
import Titles from "../Titles";
import { Container, List } from "./SectionThreeElements";

const SectionThree = () => {
  return (
    <Container>
      <Titles {...sectionThree} />
      <List>
        <ListItem {...itemFour} />
        <ListItem {...itemFive} />
        <ListItem {...itemSix} />
      </List>
    </Container>
  );
};

export default SectionThree;
