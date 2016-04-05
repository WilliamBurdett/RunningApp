import React from 'react'; 
import MenuItem from 'material-ui/lib/menus/menu-item';
import LeftNav from 'material-ui/lib/left-nav';
import {browserHistory} from 'react-router'

const routes = [
	{
		target: "home",
		name:"Home"
	},
	{
		target:"results",
		name:"Results"
	},
	{
		target:"login",
		name:"Login"
	},
	{
		target:"progress",
		name:"Progess"
	},
	{
		target:"startRun",
		name:"StartRun"
	}
]

export default class MainLeftNav extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			open:false
		}

		this.onRequestChange = this.onRequestChange.bind(this);
	}

	toggleMenu(){
		this.setState({
			open: !this.state.open
		})
	}

	onRequestChange(reason){
		this.toggleMenu();

	}

	onMenuClick(target){
		console.log("Target", target);
		browserHistory.push(target);
		this.toggleMenu();
	}

	renderMenuItems(){
		return routes.map((route) => {
			return <MenuItem key={route.target} onTouchTap={this.onMenuClick.bind(this, route.target)}>{route.name}</MenuItem>
		})
	}

	render(){
		return (
	        <LeftNav
	        	open={this.state.open}
	        	onRequestChange={this.onRequestChange}
	        	docked={false}
	        >
	        	{this.renderMenuItems()}
	        </LeftNav>
        );
	}
}