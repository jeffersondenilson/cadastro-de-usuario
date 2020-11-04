import { useState } from 'react';
import Main from '../template/Main';
import UsersForm from './UsersForm';
import UsersTable from './UsersTable';
import axios from 'axios';

const userModel = {name: '', email: ''};

export default function Users(props){
	const [user, setUser] = useState({...userModel});
	const [list, setList] = useState([]);
	
	useEffect(()=>{
		axios.get('/users')
			.then(res => setList(res.data))
			.catch(console.log)
	}, [])

	const clear = () => setUser({...userModel});

	// remove usuário alterado e adiciona no começo
	const getUpdatedList = (user, add = false) => {
		const newList = list.filter(u => u.id !== user.id);
		if(add) newList.unshift(user);
		return newList;
	}

	const save = () => {
		const method = user.id ? 'put' : 'post';
		const url = users.id ? `/users/${user.id}` : '/users';

		axios[method](url, user)
			.then(res => {
				const newList = getUpdatedList(res.data, true);
				clear();
				setList(newList);
			})
			.catch(console.log);
	}

	const changeUser = e => {
		const newUser = {...user};
		newUser[e.target.name] = e.target.value;
		setUser(newUser);
	}

	const editUser = user => {
		setUser(user);
	}

	const removeUser = user => {
		axios.delete(`/users/${user.id}`)
			.then(res => {
				console.log('remove', res.data);
				const newList = getUpdatedList(user, false);
				setList(newList);
			})
			.catch(console.log)
	}

	return (
		<Main icon="users" title="Usuários" subtitle="Cadastro de usuários">
			<UsersForm user={user} change={changeUser} save={save} clear={clear} />
			<UsersTable list={list} edit={loadUser} remove={removeUser} />
		</Main>
	);
}