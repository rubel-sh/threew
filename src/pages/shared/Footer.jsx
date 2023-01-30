import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  border-top: 1px solid #eee;
  color: #000;
  font-size: 13px;
  padding: 25px 0;
  text-align: center;
  background-color: #fff;
  margin-top: 15px;
`;

const Footer = () => {
  return (
    <StyledFooter>© copyright 2022 - All Right Reserved by Faucet</StyledFooter>
  );
};

export default Footer;
