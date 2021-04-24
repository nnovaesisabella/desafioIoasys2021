import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyleComponent = createGlobalStyle`
*{
  margin: 0;
  border:0;
  box-sizing:border-box;
  font-family: 'Heebo', sans-serif;
  width:auto;
}
body{

  height:auto;
}

`;

/*eslint-disable*/
export const Container = styled.div`
	width: 100%;
	height: auto;
	background-color: ${({ color }) => color};
	background-image: url(${({ img }) => img});
    display: flex;
    align-items: center;
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
`;
