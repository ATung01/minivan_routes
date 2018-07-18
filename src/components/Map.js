import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class Map extends Component {
   render() {
   const GoogleMapDefault = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
        defaultZoom = { 13 }
      >
      </GoogleMap>
   ));
   return(
      <div>
        <GoogleMapDefault
          containerElement={ <div style={{ height: `90vh`, width: '90vw' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
        
      </div>
   );
   }
};
export default Map;
