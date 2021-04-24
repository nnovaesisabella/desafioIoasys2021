/*eslint-disable*/
import styled from "styled-components";
import img from '../../assets/image/bg_pagebooks.png'
export const DashBoardContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background:url(${img});
  background-repeat: none;
  background-repeat: no-repeat;
  background-size: cover;
  border: none;

  @media screen and (max-height:800px) {
    height: auto;
  }
`;
