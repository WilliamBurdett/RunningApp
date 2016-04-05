import React from 'react';
import RunMap from '/client/components/googleMaps'


export default class StartRun extends React.Component {
	constructor(props){
		super(props);
	}

	componentWillMount(){
		MainAppBarTitle.set("Start Run");
	}

	render(){
		return(
			<div className="parentDiv">
				<div className="mapDiv">
					<RunMap ref="map"/>
				</div>
				<div className = "standDiv">
					<h1>Hello</h1>
				</div>
			</div>
		);
	}

	componentWillUnmount(){

	}
}