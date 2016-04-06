import React from 'react';

export default class ButtonLayout extends React.Component {
  constructor(props){
    super(props);


  }

  render(){
  	return (
  		<div className="flexContainerColumn flexFill borderLight">
  			<div className="flexContainerRow">
	  			<div className="flexItem">
	  				1
	  			</div>
	  			<div className="flexItem">
	  				2
	  			</div>
	  		</div>
	  		<div className="flexContainerRow">
	  			<div className="flexItem">
	  				3
	  			</div>
	  			<div className="flexItem">
	  				4
	  			</div>
  			</div>
  		</div>
  	)
  }
}