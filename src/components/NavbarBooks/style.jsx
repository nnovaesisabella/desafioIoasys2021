/*eslint-disable*/
import styled from 'styled-components';

export const ContainerNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  height: 70px;
  display: -webkit-flex;
`;

export const ContentNav = styled.div`
  display: flex;
  align-items: center;
  padding-left: 115px;

  @media (max-height: 812px) {
    padding-left: 50px;
  }

  @media (max-width: 640px) {
    padding-left: 30px;
  }
`;

export const LogoImage = styled.img`
  display: flex;
  align-items: center;
  width: 104.4px;
  height: 36px;
  padding-right: 16.6px;
`;

export const Text = styled.h5`
  height: 40px;
  color: #333333;
  font-size: 1.75rem;
`;

export const ContainerUser = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 120px;
  margin-left: auto;

  @media (max-width: 640px) {
    padding-right: 50px;
  }
`;

export const User = styled.p`
  margin-right: 16px;
  font-size: 0.75rem;
  color: #333333;
  font-weight: 600;

  @media (max-width: 640px) {
    display: none;
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
