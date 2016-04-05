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
			<div className="parentDiv">
				<div className="mapDiv">
					GRAPHS
				</div>
				<div className = "standDiv">
					<ButtonLayout />
				</div>
			</div>
		);
	}

	componentWillUnmount(){

	}
}