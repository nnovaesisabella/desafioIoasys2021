import React from 'react';
import P from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import {
  ContainerNav,
  ContentNav,
  LogoImage,
  Text,
  ContainerUser,
  User,
  ButtonLogout,
  Logout,
} from './style';
import Logo from '../../assets/image/logoblack.png';
import LogoutIcon from '../../assets/image/iconlogout.png';
import { logout } from '../../redux/userSlice';

export const NavBar = ({ user }) => {
  const { name, gender } = user.user;
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogoult = (e) => {
    e.preventDefault();
    dispatch(logout());
    localStorage.clear();
    history.push('/');
  };
  return (
    <>
      <ContainerNav>
        <ContentNav>
          <LogoImage src={Logo} alt="Logo Black" />
          <Text> Books</Text>
        </ContentNav>
        <ContainerUser>
          <User>
            {`${
              gender === 'F' ? 'Seja, bem-vinda!' : 'Seja, bem-vindo!'
            } ${name}.`}{' '}
          </User>
          <ButtonLogout onClick={(e) => handleLogoult(e)}>
            <Logout src={LogoutIcon} alt="Logout" />
          </ButtonLogout>
        </ContainerUser>
      </ContainerNav>
    </>
  );
};

NavBar.propTypes = {
  user: P.object,
};
