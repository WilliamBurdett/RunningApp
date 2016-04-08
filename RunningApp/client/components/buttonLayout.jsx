import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import QuadSection from '/client/components/quadSection';

export default class ButtonLayout extends React.Component {
	constructor(props){
		super(props);


	}

  render(){
  	var self = this;
  	var upLeft = <RaisedButton label={self.props.upLeftLabel} fullWidth={true} />;
  	var upRight = <RaisedButton label={self.props.upRightLabel} fullWidth={true} />;
  	var downLeft = <RaisedButton label={self.props.downLeftLabel} fullWidth={true} />;
  	var downRight = <RaisedButton label={self.props.downRightLabel} fullWidth={true} />;

  	return (
  		<div className="flexContainerColumn flexFill borderLight">
  			<QuadSection 
  				upLeft={upLeft}
  				upRight={upRight}
  				downLeft={downLeft}
  				downRight={downRight}
  			/>
  		</div>
  	)
  }
}



