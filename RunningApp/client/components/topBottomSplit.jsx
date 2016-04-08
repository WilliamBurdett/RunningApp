import React from 'react';

export default class TopBottomSplit extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
  	self = this;
  	return (
  		<div className="flexContainerColumn flexFill borderLight">
  			<div className="topChild flexContainerRow borderLight">
  				{self.props.topSection}
			</div>
			<div className = "topChild flexContainerRow borderLight">
				{self.props.bottomSection}
			</div>
  		</div>
  		)
  	}
}