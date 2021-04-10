/* eslint-disable */
import React, { useEffect } from "react";
import Logo from "../../assets/images/logoblack.png";
import LogUser from "../../assets/images/iconlogout.png";
import { ContainerBooks } from "../ContentBooks";
import P from "prop-types";
import {
  HeaderBook,
  ContainerNav,
  LogoImage,
  Logout,
  ContainerUser,
  User,
  ContentBooks,
  Text,
  ContentNav,
  ButtonLogout,


} from "./styles";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { Redirect, useHistory } from "react-router-dom";

export const PageBooks = ({ auth }) => {
  let twk = null;
  const history = useHistory();
  const [boocks, setBooks] = useState([]);
  const [authUser] = useState(auth);
  const dispatch = useDispatch();

  const handleLogoult = (e) => {
    e.preventDefault();
    dispatch(logout());
    localStorage.clear();
    history.push("/");
  };

  if (auth && auth.user !== null) {
    const {
      user: { initialState, name, gender },
    } = authUser;
    if (initialState) {
      return (
        <>
          <HeaderBook>
            <ContainerNav>
              <ContentNav>
                <LogoImage src={Logo} />
                <Text> Books</Text>
              </ContentNav>
              <ContainerUser>
                <User>{`${gender === "M" ? "Bem Vindo," : "Bem Vinda,"}
                ${name}!`}</User>
                <ButtonLogout onClick={(e) => handleLogoult(e)}>
                  <Logout src={LogUser} />
                </ButtonLogout>
              </ContainerUser>
            </ContainerNav>
            <ContentBooks> <ContainerBooks/> </ContentBooks>
          </HeaderBook>

        </>
      );
    } else {
      return <Redirect to="/" />;
    }
  } else {
    return <Redirect to="/" />;
  }
};

PageBooks.propTypes = {
  auth: P.object,
};
