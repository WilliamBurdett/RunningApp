import React from 'react';

export default class LeftRightSplit extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
  	self = this;
  	return (
      <div className="flexContainerRow flexFill borderLight">
        <div className="topChild flexContainerColumn borderLight">
          {self.props.topSection}
        </div>
        <div className = "topChild flexContainerColumn borderLight">
          {self.props.bottomSection}
        </div>
      </div>
  	)
  }
}