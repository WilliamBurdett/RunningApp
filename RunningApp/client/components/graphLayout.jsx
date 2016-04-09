import React from 'react'; 

export default class GraphLayout extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		var self = this;
		return(
			<div className="topParent">
				{self.props.label}
			</div>
		)
	}
}