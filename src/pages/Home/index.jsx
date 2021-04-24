import React from 'react';
import {Container} from '../../styles/GlobalStyled';
import Bk from '../../assets/image/bk_image.png'
import { Login } from '../../components/Login';
const Home = () => {
	return( 

<Container img={Bk}>

<Login/>

</Container>
    );
};
export default Home;