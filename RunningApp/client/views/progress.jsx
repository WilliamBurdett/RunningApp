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
		var graphs = <GraphLayout />
		var leftRightSplit = <LeftRightSplit />
		return(
			<div className="topParent">
					<TopBottomSplit topSection={graphs} bottomSection={leftRightSplit} />
			</div>
		);
	}

	componentWillUnmount(){

	}
}