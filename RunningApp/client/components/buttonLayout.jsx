import React from 'react';

export default class ButtonLayout extends React.Component {
  constructor(props){
    super(props);


  }

  render(){
  	return (
  		<div className="parentDiv flexContainer">
  			<div className="buttonDiv">
  				1
  			</div>
  			<div className="buttonDiv">
  				2
  			</div>
  			<div className="buttonDiv">
  				3
  			</div>
  			<div className="buttonDiv">
  				4
  			</div>
  		</div>
  	)
  }
}