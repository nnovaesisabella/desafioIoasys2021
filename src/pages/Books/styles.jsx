/* eslint-disable */
import styled from "styled-components";
import bgBooks from "../../assets/images/bg_pagebooks.png";

export const HeaderBook = styled.div`
  width: 100%;
  height:100vh;
  background-image: url(${bgBooks});
  background-repeat:none;
  word-break: break-all;
  background-repeat:no-repeat;
  background-size:auto;
 


  @media screen and (max-height:1024px){
    height: 100%;
    margin:auto;
  }
`;

export const ContainerNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  top: 20px;
  display: -webkit-flex;



`;
export const ContentNav = styled.div`
  display: flex;
  align-items: center;
  padding-left: 115px;


  @media (max-height:812px){
     padding-left: 50px;
  }

  @media (max-width:640px){
    padding-left: 40px;
  }
`;

export const LogoImage = styled.img`
  display: flex;
  align-items: center;
  width: 104.4px;
  height: 36px;
  padding-right: 16.6px;

  @media (max-width:640px){

  }
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

  @media (max-width:640px){
    padding-right: 80px;
  }


`;
export const User = styled.div`
  margin-right: 16px;

  @media (max-width:640px){
  display:none;
  }
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
  height: calc(100vh -80px);
  margin-top: 43px;
  display: flex;
  justify-content:center;
  align-items: center;

  @media (max-width:1024px){

    height:100%;
    margin-top: 2px;
  }


`;
