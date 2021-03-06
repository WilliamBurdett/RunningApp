import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

import App from '/client/app';
import Home from '/client/views/home';
import Results from '/client/views/results';
import Login from '/client/views/login';
import Progress from '/client/views/progress';
import StartRun from '/client/views/startRun';

export const renderRoutes = () => (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route path="home" component={Home} />
			<Route path="results" component={Results} />
			<Route path="login" component={Login} />
			<Route path="progress" component={Progress} />
			<Route path="startRun" component={StartRun} />
		</Route>
	</Router>
)