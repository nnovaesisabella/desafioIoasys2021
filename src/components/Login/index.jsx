
import React from "react";
import Logo from "../../assets/image/logoioasys.png";
import { InputsContents } from "../InputsLogin";
import { ContainerLogin, ContentLogo, LogoImg, TextBook } from "./styled";

export const Login = () => {
  return (
    <ContainerLogin>
      <ContentLogo>
        <LogoImg src={Logo} alt="Logo Ioasys" />
        <TextBook> Books</TextBook>
      </ContentLogo>
      <InputsContents />
    </ContainerLogin>
  );
};
