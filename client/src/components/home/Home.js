import Main from '../template/Main';

export default function Home(props){
	return(
		<Main icon="home" title="Início" 
      subtitle="Lorem ipsum dolor sit 
      amet consectetur adipisicing elit">
      <div className="display-4">Bem Vindo!</div>
      <hr />
      <p className="mb-0">
      	Lorem ipsum dolor, sit amet consectetur, adipisicing elit. 
      	Pariatur quidem illo minus maiores explicabo, inventore repellendus molestiae autem animi harum.
      </p>
    </Main>
	);
}