import { useState } from 'react';
import Main from '../template/Main';

export default function Users(props){
	const [user, setUser] = useState({name: '', email: ''});
	const [list, setList] = useState([]);

	const clear = () => setUser({name: '', email: ''});
	const save = () => {
		const method = user.id ? 'put' : 'post';
		const url = `/${user.id ? user.id : ''}`;
		
	};

	return (
		<Main icon="users" title="Usuários" subtitle="Cadastro de usuários">
			Cadastro de Usuários
		</Main>
	);
}