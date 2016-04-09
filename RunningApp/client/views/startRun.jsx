import React from 'react';
import RunMap from '/client/components/googleMaps';
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
		return(
			<div className="topParent">
					<TopBottomSplit bottomSection={runMap} topSection={runMap} />
			</div>
		);
	}

	componentWillUnmount(){

	}
}
