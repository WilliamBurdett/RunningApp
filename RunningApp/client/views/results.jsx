import React from 'react';
import TopBottomSplit from '/client/components/topBottomSplit';
import GraphLayout from '/client/components/graphLayout';

export default class Results extends React.Component {
	constructor(props){
		super(props);
	}

	componentWillMount(){
		MainAppBarTitle.set("Results");
	}

	render(){
		var graphs = <GraphLayout />
		return (
			<div className="topParent">
					<TopBottomSplit bottomSection={graphs} topSection={graphs} />
			</div>
		)
	}
}