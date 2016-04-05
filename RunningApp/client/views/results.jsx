import React from 'react';

export default class Results extends React.Component {
	constructor(props){
		super(props);
	}

	componentWillMount(){
		MainAppBarTitle.set("Results");
	}

	render(){
		return (
			<div>
				<h1>Results</h1>
			</div>
		)
	}
}