import React from "react";
import { Container, List, Items, Icon } from "./SponsorsElements";
import google from "../../images/logo-google.png";
import ibm from "../../images/logo-ibm.png";
import microsoft from "../../images/logo-microsoft.png";
import hp from "../../images/logo-hp.png";
import vector from "../../images/logo-vector-graphics.png";

const Sponsors = () => {
  return (
    <Container>
      <List>
        <Items>
          <Icon src={google} />
        </Items>
        <Items>
          <Icon src={ibm} />
        </Items>
        <Items>
          <Icon src={microsoft} />
        </Items>
        <Items>
          <Icon src={hp} />
        </Items>
        <Items>
          <Icon src={vector} />
        </Items>
      </List>
    </Container>
  );
};

export default Sponsors;
