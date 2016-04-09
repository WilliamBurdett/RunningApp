import React from 'react';
import TopBottomSplit from '/client/components/topBottomSplit';
import GraphLayout from '/client/components/graphLayout';
import LeftRightSplit from '/client/components/leftRightSplit';
import RaisedButton from 'material-ui/lib/raised-button';


export default class Progress extends React.Component {
	constructor(props){
		super(props);
	}

	componentWillMount(){
		MainAppBarTitle.set("Progress");
	}

	render(){
		var graph = <GraphLayout label="My graph"/>
		var topButton = <RaisedButton label="Change Graph Type" />
		var bottomButton = <RaisedButton label="Change Graph Type" />
		var leftSection = <TopBottomSplit topSection={topButton} bottomSection={bottomButton} />
		var rightSection = <GraphLayout label="My list"/>
		var leftRightSplit = <LeftRightSplit leftSection={leftSection} rightSection={rightSection}/>
		return(
			<div className="topParent">
					<TopBottomSplit topSection={graph} bottomSection={leftRightSplit} />
			</div>
		);
	}

	componentWillUnmount(){

	}
}