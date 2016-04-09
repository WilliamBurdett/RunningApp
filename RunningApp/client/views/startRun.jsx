import React from 'react';
import RunMap from '/client/components/googleMaps';
import ButtonLayout from '/client/components/buttonLayout';
import TopBottomSplit from '/client/components/topBottomSplit';


export default class StartRun extends React.Component {
	constructor(props){
		super(props);
	}

	componentWillMount(){
		MainAppBarTitle.set("Start Run");
	}

	render(){

		var runMap = <RunMap />;
		var buttons = <ButtonLayout />
		return(
			<div className="topParent">
					<TopBottomSplit bottomSection={buttons} topSection={runMap} />
			</div>
		);
	}

	componentWillUnmount(){

	}
}
