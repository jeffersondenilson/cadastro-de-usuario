import { Link } from 'react-router-dom';
import './Logo.css';
import logo from '../../logo.svg';


export default function Logo(props){
	return (
		<aside className="logo">
			<Link to="/" className="logo">
				<img src={logo} alt="logo" />
			</Link>
		</aside>
	);
}