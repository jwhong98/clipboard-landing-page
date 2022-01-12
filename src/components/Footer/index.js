import React from "react";
import {
  Foot,
  FootWrap,
  Logo,
  LinkList,
  Item,
  Link,
  IconWrap,
  Icon,
} from "./FooterElements";
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import instagram from "../../images/icon-instagram.svg";
import logo from "../../images/logo.svg";

const Footer = () => {
  return (
    <Foot>
      <FootWrap>
        <Logo src={logo} />
        <LinkList>
          <Item>
            <Link>FAQs</Link>
          </Item>
          <Item>
            <Link>Contact Us</Link>
          </Item>
          <Item>
            <Link>Privacy Policy</Link>
          </Item>
          <Item>
            <Link>Press Kit</Link>
          </Item>
          <Item>
            <Link>Install Guide</Link>
          </Item>
        </LinkList>
        <IconWrap>
          <Icon src={facebook} />
          <Icon src={twitter} />
          <Icon src={instagram} />
        </IconWrap>
      </FootWrap>
    </Foot>
  );
};

export default Footer;
