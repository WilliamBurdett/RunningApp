import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

export default class RunMap extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      markers:[]
    }
  }

  addMarker(location){
    const latLng=new google.maps.LatLng(location.latitude, location.longitude);
    var state = this.state;
    state.markers.push({
      position:latLng,
      key:Random.id()
    })
    this.setState(state);
  }

  handleMarkerRightclick(){

  }

  render () {
    return (
    <section style={{height: "400px"}}>
      <GoogleMapLoader
        containerElement={
          <div
            {...this.props}
            style={{
              height: "100%",
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            ref={(map) => console.log(map)}
            defaultZoom={3}
            defaultCenter={{lat: -25.363882, lng: 131.044922}}
            onClick={this.handleMapClick}>
            {this.state.markers.map((marker, index) => {
              return (
                <Marker
                  {...marker}
                  onRightclick={this.handleMarkerRightclick.bind(this, index)} />
              );
            })}
          </GoogleMap>
        }
      />
    </section>
  );
  }
}