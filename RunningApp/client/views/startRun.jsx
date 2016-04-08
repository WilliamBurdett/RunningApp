import React from 'react';
import RunMap from '/client/components/googleMaps'
import TopLargeWithFourButtons from '/client/components/topLargeWithFourButtons'


export default class StartRun extends React.Component {
	constructor(props){
		super(props);
	}

	componentWillMount(){
		MainAppBarTitle.set("Start Run");
	}

// <div className="parentDiv">
// 				<div className="mapDiv">
// 					<RunMap ref="map"/>
// 				</div>
// 				<div className = "standDiv">
// 					<h1>Hello</h1>
// 				</div>
// 			</div>

	render(){

		var runMap = <RunMap />;
		return(
			<div className="topParent">
					<TopLargeWithFourButtons topSection={runMap} />
			</div>
		);
	}

	componentWillUnmount(){

	}
}
