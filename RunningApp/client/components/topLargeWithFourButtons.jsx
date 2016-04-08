import React from 'react';
import ButtonLayout from '/client/components/buttonLayout'


export default class TopLargeWithFourButtons extends React.Component {
  constructor(props){
    super(props);

    console.log("hey");
  }

  render(){
  	self = this;
  	return (
  		<div className="flexContainerColumn flexFill borderLight">
  			<div className="topChild flexContainerRow borderLight">
				<div className="flexContainerRow">
					{self.props.topSection}
	  			</div>
			</div>
			<div className = "topChild flexContainerRow borderLight">
				<ButtonLayout />
			</div>
  		</div>
  		)
  	}
}