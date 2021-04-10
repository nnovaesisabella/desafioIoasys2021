/*eslint-disable*/
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login,errorMsg } from '../../features/userSlice';
import { Container, ButtonAcess, ImgLogo, Input, ContainerAcess, Image } from './styles';
import Logo from '../../assets/images/logoioasys.png';
import { Api } from '../../services/api';
import { useHistory } from 'react-router';
// import { FormsLogin } from "../../components/FormsLogin";

export const Login = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ error, setError ] = useState('');

	const dispatch = useDispatch();
	const history = useHistory();
	const handleSubmit = async (e) => {
		e.preventDefault();

		let errorResponse = null;
try {

  const response = await Api.post('https://books.ioasys.com.br/api/v1/auth/sign-in', {
    email: email,
    password: password
  })
  const { headers, data } = response;

  let authorization = headers.authorization;
  let refresh = headers['refresh-token'];

  localStorage.setItem('refresh', refresh);
  localStorage.setItem('auth', authorization);

  let config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('auth')}`
    }
  };
  if (response) {

      const log = Api.post('https://books.ioasys.com.br/api/v1/auth/refresh-token', config, {
        refreshToken: localStorage.getItem('refresh')
      });
      localStorage.setItem('refrsToken', log ? true : false);
      data.initialState = localStorage.getItem('refrsToken');
      localStorage.setItem('userauth', JSON.stringify(data));
      const dataEs = JSON.parse(localStorage.getItem('userauth'));
      dispatch(login({ user: { ...dataEs }, initialState: log ? true : false }));

    history.push('/books'); 
  }
} catch (error) {
 dispatch(errorMsg({error:error.message}));
}
	};

	return (
		<Container>
			<form onSubmit={(e) => handleSubmit(e)}>
				<Image>
					<ImgLogo src={Logo} />
					Books
				</Image>
				<Input
					placeholder="Email"
					type="text"
					name="email"
					autocomplete="off"
					label="Email"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<ContainerAcess>
					<Input
						type="password"
						name="password"
						label="Senha"
						placeholder="Senha"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<ButtonAcess type="submit"> Entrar</ButtonAcess>
				</ContainerAcess>
			</form>
		</Container>
	);
};
