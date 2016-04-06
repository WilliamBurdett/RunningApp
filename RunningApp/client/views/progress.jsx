import React from 'react';
import ButtonLayout from '/client/components/buttonLayout'


export default class Progress extends React.Component {
	constructor(props){
		super(props);
	}

	componentWillMount(){
		MainAppBarTitle.set("Progress");
	}

	render(){
		return(
			<div className="topParent">
					<div className="topChild flexContainerRow borderLight">
						<div className="flexContainerRow">
							Graphs!
			  			</div>
					</div>
					<div className = "topChild flexContainerRow borderLight">
						<ButtonLayout />
					</div>
			</div>
		);
	}

	componentWillUnmount(){

	}
}