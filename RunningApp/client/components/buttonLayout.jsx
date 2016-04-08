import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

const style = {
	margin: "1%",
	width:"98%",
};


export default class ButtonLayout extends React.Component {
	constructor(props){
		super(props);


	}

  render(){
  	return (
  		<div className="flexContainerColumn flexFill borderLight">
  			<div className="flexContainerRow">
	  			<div className="buttonItem">
	  				<RaisedButton label="Default" style={style} />
	  			</div>
	  			<div className="buttonItem">
	  				<RaisedButton label="Default" style={style} />
	  			</div>
	  		</div>
	  		<div className="flexContainerRow">
	  			<div className="buttonItem">
	  				<RaisedButton label="Default" style={style} />
	  			</div>
	  			<div className="buttonItem">
	  				<RaisedButton label="Default" style={style} />
	  			</div>
  			</div>
  		</div>
  	)
  }
}
