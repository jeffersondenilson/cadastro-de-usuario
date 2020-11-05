import Main from '../template/Main';
import { Link } from 'react-router-dom';

export default function Home(props){
	return(
		<Main icon="home" title="Início" 
      subtitle="Aplicação que simula cadastro de usuários">
      <div className="display-4">Bem Vindo!</div>
      <hr />
      <p className="mb-0">
      	Aplicação que simula cadastro de usuários. Vá para 
        <Link to="/users" className="link">Usuários</Link>.
      </p>
    </Main>
	);
}