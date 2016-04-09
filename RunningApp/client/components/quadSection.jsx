import React from 'react';
import TopBottomSplit from '/client/components/topBottomSplit';
import LeftRightSplit from '/client/components/leftRightSplit';

export default class QuadSection extends React.Component {
	constructor(props){
		super(props);


	}

  render(){
  	var self = this;
  	var graph = <GraphLayout />
  	var topSection = <LeftRightSplit leftSection={graph} rightSection={graph}/>
  	return (
  		<div className="flexContainerColumn flexFill borderLight">
  			 <TopBottomSplit topSection={graphs}/>
  		</div>
  	)
  }
}



  			// <div className="flexContainerRow">
	  		// 	<div className="buttonItem">
	  		// 		{self.props.upLeft}
	  		// 	</div>
	  		// 	<div className="buttonItem">
	  		// 		{self.props.upRight}
	  		// 	</div>
	  		// </div>
	  		// <div className="flexContainerRow">
	  		// 	<div className="buttonItem">
	  		// 		{self.props.downLeft}
	  		// 	</div>
	  		// 	<div className="buttonItem">
	  		// 		{self.props.downRight}
	  		// 	</div>
  			// </div>