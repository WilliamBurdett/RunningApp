import React from 'react';
import {RaisedButton} from 'material-ui'
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {Meteor} from 'meteor/meteor' 
import RunMap from '/client/components/googleMaps'

export default class Home extends TrackerReact(React.Component){
	constructor(props){
		super(props);

		this.state = {
			isTracking:false
		}
	}

	componentWillMount(){
		SubsMgr.subscribe("allLocations");
		MainAppBarTitle.set("Home");
	}

	fetchRecentLocation(){
		return Locations.findOne({}, {sort:{timestamp:-1}});
	}

	toggleTracking(){
		const guid = Random.id();
		var self = this;
		console.log("tracking!");
		if(!this.state.isTracking){
			CombinedLocation.startWatching((location)=> {
				console.log(location);
				Meteor.call("storeLocationUpdate", location, guid);
				self.refs.map.addMarker(location);
			});
		} else{
			CombinedLocation.stopWatching();
		}
		this.setState({
			isTracking: !this.state.isTracking
		})
	}

	render(){
		var button = <RaisedButton onTouchTap={this.toggleTracking.bind(this)} label={this.state.isTracking ? "Stop Tracking" : "Start Tracking"} />
		const location = this.fetchRecentLocation();
		return (
			<div id="homeDiv" className="topParent">
				This is the best homepage
				{JSON.stringify(location)}
				{button}
				{/*<RunMap ref="map"/>*/}
			</div>
		)
	}

	componentWillUnmount(){

	}
}




