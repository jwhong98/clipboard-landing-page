import styled from "styled-components";
import img from "../../images/bg-header-mobile.png";

export const HeadContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${img});
  background-repeat: no-repeat;
  padding: 1.75rem;
`;

export const Logo = styled.img`
  margin-top: 5rem;
`;

export const TextWrap = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  color: hsl(210, 10%, 33%);
`;

export const Description = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: hsl(201, 11%, 66%);
  margin-bottom: 2rem;
`;
