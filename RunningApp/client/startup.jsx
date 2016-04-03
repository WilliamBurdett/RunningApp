import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import {renderRoutes} from  '/client/routes'

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

SubsMgr = new SubsManager()

Meteor.startup(()=>{
	console.log(document.getElementById("app"));
	render(renderRoutes(), document.getElementById("app"));
})