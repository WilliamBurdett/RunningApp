

Meteor.methods({
	 storeLocationUpdate(location, guid){
	 	if(!this.userId){
	 		return;
	 	}
	 	var insert = location;
	 	insert.userId = this.userId;
	 	insert.runId = guid;
	 	Locations.insert(insert);
	 }
})