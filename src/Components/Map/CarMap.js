
import React from 'react';
import {
  Polyline,
  withScriptjs,
  withGoogleMap, GoogleMap, Marker,
} from 'react-google-maps';
import { pointer, activePointer } from '../../assets/images/placeholders';


const CarMap = withScriptjs(withGoogleMap(({
  carPath, carMarkers, activePath,
}) => {
  /* eslint-disable no-undef */
  // disabling eslint for no-undef, because this lib seems already
  // handle google vars
  const regularPointer = {
    url: pointer,
    size: new google.maps.Size(18, 18),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(12, 10),
  };
  const activePoinerStyle = {
    url: activePointer,
    size: new google.maps.Size(45, 45),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(20, 18),
  };
  /* eslint-enable */
  return (
    <GoogleMap
      defaultZoom={18}
      defaultCenter={{ lat: 38.915947, lng: -77.0479286 }}
    >
      {carMarkers.length > 0 && (
        carMarkers.map((marker) => {
          const resolvepoint = activePath.lat === marker.lat
            ? activePoinerStyle : regularPointer;
          return (
            <Marker
              key={marker.lat}
              position={{ lat: marker.lat, lng: marker.lng }}
              icon={resolvepoint}
            />
          );
        })
      )}
      <Polyline path={carPath} options={{ strokeColor: '#1482fd' }} />
    </GoogleMap>
  );
}));

export default CarMap;
