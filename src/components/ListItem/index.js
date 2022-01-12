import React from "react";
import { Item, Img, Title, Description } from "./ListItemElements";

const ListItem = (props) => {
  return (
    <Item>
      <Img img={props.img} src={props.src} />
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </Item>
  );
};

export default ListItem;
