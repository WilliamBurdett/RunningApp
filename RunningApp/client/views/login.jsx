import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {browserHistory} from 'react-router'
import {RaisedButton} from 'material-ui'


export default class Login extends React.Component{
	constructor(props){
		super(props);

		this.routeToHome = this.routeToHome.bind(this);
	}

	// getUser(){
	// 	return Meteor.user();
	// }

	routeToHome(){
		console.log("Sup dawg?");
		browserHistory.push("home");
	}

	render(){
		return (
			<div>
				<LogInButtons />
				<RaisedButton onTouchTap={this.routeToHome} label="Home Page"/>
			</div>
		)
	}
}