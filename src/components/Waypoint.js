import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, withScriptjs } from 'react-google-maps';
import { compose } from 'recompose'

class Waypoint extends Component {

  render() {
  const MapWithAMarker = compose(
  withScriptjs,
  withGoogleMap
  )(props =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
      />
    </GoogleMap>
  );
  const URL = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}`
  return (
    <div>
      <MapWithAMarker
        googleMapURL= {URL}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  )}
};
export default Waypoint;
