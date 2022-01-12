import React from "react";
import { Item, Title, Description } from "./ListItemElements";

const ListItem = (props) => {
  return (
    <Item>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </Item>
  );
};

export default ListItem;
