import React from 'react';

export default class LeftRightSplit extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
  	self = this;
  	return (
      <div className="flexContainerRow flexFill borderDark">
        <div className="topChild flexContainerColumn borderLight">
          {self.props.leftSection}
        </div>
        <div className = "topChild flexContainerColumn borderLight">
          {self.props.rightSection}
        </div>
      </div>
  	)
  }
}