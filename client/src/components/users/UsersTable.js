export default function UserTable({list, edit, remove}){
	return (
		<table className="table mt-4">
			<thead>
				<tr>
					<th>ID</th>
					<th>Nome</th>
					<th>Email</th>
					<th>Ações</th>
				</tr>
			</thead>
			<tbody>
				{list.map(user => 
					<tr key={user.id}>
						<td>{user.id}</td>
						<td>{user.name}</td>
						<td>{user.email}</td>
						<td>
							<button className="btn btn-warning" onClick={() => edit(user)}>
								<i className="fa fa-pencil"></i>
							</button>
							<button className="btn btn-danger ml-2" onClick={() => remove(user)}>
								<i className="fa fa-trash"></i>
							</button>
						</td>
					</tr>
				)}
			</tbody>
		</table>
	);
}