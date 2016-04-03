Meteor.publish("allLocations", ()=>{
	return Locations.find({userId:this.userId});
});