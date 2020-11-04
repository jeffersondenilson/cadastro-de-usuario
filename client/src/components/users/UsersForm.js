export default function UsersForm({user, change, save, clear}){
	return (
		<div className="form">
			<div className="row">
				<div className="col-12 col-md-6">
					<div className="form-group">
						<label htmlFor="name">Nome</label>
						<input type="text" className="form-control" 
							name="name" id="name" placeholder="Digite o nome..."
							value={user.name} onChange={change} />
					</div>
				</div>
				<div className="col-12 col-md-6">
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input type="text" className="form-control" 
							name="email" id="email" placeholder="Digite o email..."
							value={user.email} onChange={change} />
					</div>
				</div>
			</div>
			<hr />
			<div className="row">
				<div className="col-12 d-flex justify-content-end">
					<button className="btn btn-primary" onClick={save}>
						Salvar
					</button>
					<button className="btn btn-secondary ml-2" onClick={clear}>
						Cancelar
					</button>
				</div>
			</div>	
		</div>
	);
}