/* eslint-disable */
import styled from "styled-components";
import bgBooks from "../../assets/images/bg_pagebooks.png";

export const HeaderBook = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bgBooks});
`;

export const ContainerNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  top: 37px;
`;
export const ContentNav = styled.div`
  display: flex;
  align-items: center;
  padding-left: 115px;
`;

export const LogoImage = styled.img`
  display: flex;
  align-items: center;
  width: 104.4px;
  height: 36px;
  padding-right: 16.6px;
`;

export const Text = styled.div`
  height: 40px;
  color: #333333;
  font-size: 1.75rem;
`;

export const ContainerUser = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 120px;
`;
export const User = styled.div`
  margin-right: 16px;
`;

export const ButtonLogout = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: rgba(51, 51, 51, 0.2) solid 1px;
  outline: none;
  cursor: pointer;
`;

export const Logout = styled.img`
  width: 16px;
  height: 16px;
`;

export const ContentBooks = styled.div`
  width: 100%;
  height: 80vh;
  border: solid red 1px;
  margin-top: 43px;
  display: flex;
  justify-content:center;
  align-items: center;
`;
