import React from 'react'; 
import AppBar from 'material-ui/lib/app-bar';
import ThemeManager from 'material-ui/lib/styles/theme-manager';

MainAppBarTitle = new ReactiveVar('Home');




export default class MainAppBar extends React.Component {
	constructor(props){
		super(props);

		this.onClickMenuToggle = this.onClickMenuToggle.bind(this);

		this.state = {
			title:"Home"
		}
	}

	componentWillMount() {
		var self = this;

		Tracker.autorun( () => {
			var title = MainAppBarTitle.get();

			self.setState({title:title});
		})
	}

	onClickMenuToggle(){
		this.props.onClickMenuToggle();
	}

	render(){

		var myTitle = <div className="mainAppBarTitle" >{this.state.title}</div>;
		return (
			<AppBar
		    	title={myTitle}
		    	iconClassNameRight="muidocs-icon-navigation-expand-more"
		    	onLeftIconButtonTouchTap={this.onClickMenuToggle}
		    	className="mainAppBar"
		    />
		)
	}
}