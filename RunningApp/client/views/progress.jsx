import React from 'react';
import ButtonLayout from '/client/components/buttonLayout';
import TopBottomSplit from '/client/components/topBottomSplit';
import GraphLayout from '/client/components/graphLayout';
import RaisedButton from 'material-ui/lib/raised-button';
import LeftRightSplit from '/client/components/leftRightSplit';


export default class Progress extends React.Component {
	constructor(props){
		super(props);
	}

	componentWillMount(){
		MainAppBarTitle.set("Progress");
	}

	render(){
		var graph = <GraphLayout label={"My graph"}/>
		var leftRightSplit = <LeftRightSplit leftSection={graph} rightSection={graph}/>
		return(
			<div className="topParent">
					<TopBottomSplit topSection={leftRightSplit} bottomSection={leftRightSplit} />
					<TopBottomSplit topSection={leftRightSplit} bottomSection={leftRightSplit} />
			</div>
		);
	}

	componentWillUnmount(){

	}
}