import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, DirectionsRenderer, withScriptjs } from 'react-google-maps';
import { compose, withProps, lifecycle } from 'recompose'
const google = window.google;


class MapWithDirections extends Component {

  render () {
  const URL = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}`
  const MapWithADirectionsRenderer = compose(
    withProps({
      googleMapURL: {URL},
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
    lifecycle({
      componentDidMount() {
        const DirectionsService = new google.maps.DirectionsService();

        DirectionsService.route({
          origin: new google.maps.LatLng(41.8507300, -87.6512600),
          destination: new google.maps.LatLng(41.8525800, -87.6514100),
          travelMode: google.maps.TravelMode.DRIVING,
        }, (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: result,
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
        });
      }
    })
  )(props =>
    <GoogleMap
      defaultZoom={7}
      defaultCenter={new google.maps.LatLng(41.8507300, -87.6512600)}
    >
      {props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>
  );

  return (
    <MapWithADirectionsRenderer />
  )}
}

export default MapWithDirections;
