import React from 'react'; 
import AppBar from 'material-ui/lib/app-bar';

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

			console.log("title", title);

			self.setState({title:title});
		})
	}

	onClickMenuToggle(){
		this.props.onClickMenuToggle();
	}

	render(){
		return (
			<AppBar
		    	title={this.state.title}
		    	iconClassNameRight="muidocs-icon-navigation-expand-more"
		    	onLeftIconButtonTouchTap={this.onClickMenuToggle}
		    />
		)
	}
}