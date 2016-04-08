import React from 'react';


export default class QuadSection extends React.Component {
	constructor(props){
		super(props);


	}

  render(){
  	self = this;
  	return (
  		<div className="flexContainerColumn flexFill borderLight">
  			<div className="flexContainerRow">
	  			<div className="buttonItem">
	  				{self.props.upLeft}
	  			</div>
	  			<div className="buttonItem">
	  				{self.props.upRight}
	  			</div>
	  		</div>
	  		<div className="flexContainerRow">
	  			<div className="buttonItem">
	  				{self.props.downLeft}
	  			</div>
	  			<div className="buttonItem">
	  				{self.props.downRight}
	  			</div>
  			</div>
  		</div>
  	)
  }
}
