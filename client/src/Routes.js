import { Switch, Route, Redirect } from 'react-router';

import Home from './components/home/Home';
import Users from './components/users/Users';

export default function Routes(props){
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/users" component={Users} />
			<Redirect from="*" to="/" />
		</Switch>
	);
}