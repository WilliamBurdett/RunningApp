import React from 'react';
import TopLargeWithFourButtons from '/client/components/topLargeWithFourButtons'


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
					<TopLargeWithFourButtons />
			</div>
		);
	}

	componentWillUnmount(){

	}
}