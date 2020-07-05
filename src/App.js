import React from 'react';
import './App.css';
import './SASS/style.css';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from './component/Index';
import 'materialize-css/dist/css/materialize.min.css';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
		</Router>
	);
}

export default App;
