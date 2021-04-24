import './App.jsx';
import { Router } from './routes/routes.js';
import { Container } from './styles/GlobalStyled.jsx';

export const App = () => {
	return (
		<Container>
			<Router />
		</Container>
	);
};
