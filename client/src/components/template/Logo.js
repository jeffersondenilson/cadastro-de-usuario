import './Logo.css';
import logo from '../../logo.svg';


export default function Logo(props){
	return (
		<aside className="logo">
			<a href="#/" className="logo">
				<img src={logo} alt="logo" />
			</a>
		</aside>
	);
}