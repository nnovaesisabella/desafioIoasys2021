/*eslint-disable */
import styled from 'styled-components';
import img from '../../assets/images/bk_image.png';

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	background-image: url(${img});
	background-size: cover;
	background-position: center;
	display: flex;
	align-items: center;
	justify-content: center;


  @media (width:411px){
    form{
    width:80%;
  }
  }

`;

export const Image = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	margin-bottom: 48px;
	font-size: 1.75rem;
	color: #ffffff;
	line-height: 40px;
`;

export const ImgLogo = styled.img`
	width: 104.4px;
	height: 36px;
	left: 16px;
	padding-right: 16.6px;
`;
export const Input = styled.input`
	width: 368px;
	height: 50px;
	padding-left: 20px;
	padding-right: 120px;
	border-radius: 4px;
	background: rgba(0, 0, 0, 0.32) !important;
	margin-bottom: 16px;
	outline: none;
	color: #ffffff;
	font-weight: 400;

	::placeholder {
		color: #ffffff;
		padding-left: 8px;
	}

  @media (max-width: 768px){
    width:100%;
  }
`;

export const ContainerAcess = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	width: 368px;
	height: 60px;

  @media (max-width: 768px){
    width:100%;
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

	:hover {
		background: #b22e6f;
		color: #ffffff;
		font-weight: bold;
	}


`;

