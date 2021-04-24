/*eslint-disable*/

import styled from "styled-components";

export const ContainerForms = styled.div`
  width: 368px;
  height: auto;

  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const Input = styled.input`
  width: 368px;
  height: 50px;
  padding-left: 20px;
  padding-right: 120px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.32);
  margin-bottom: 16px;
  outline: none;
  color: #ffffff;
  font-weight: 400;
  border: none;

  ::placeholder {
    color: #ffffff;
    padding-left: 8px;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const ContainerAcess = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 368px;
  height: 60px;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const ButtonAcess = styled.button`
  position: absolute;
  width: 85px;
  height: 36px;
  top: 4px;
  right: 12px;
  border-radius: 44px;
  color: #b22e6f;
  font-family: Heebo;
  font-weight: 800;
  outline: none;
  border: none;

  :hover {
    background: #b22e6f;
    color: #ffffff;
    font-weight: bold;
  }
`;
