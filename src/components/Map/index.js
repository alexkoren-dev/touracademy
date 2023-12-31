import React from "react";
import { compose, withProps } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
  } from "react-google-maps";

const Map = (props) => {
    return (
        <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
            {props.isMarkerShown && (
            <Marker position={{ lat: -34.397, lng: 150.644 }} />
            )}
        </GoogleMap>
    )
}

export default compose(
    withProps({
      googleMapURL:
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyDfhRn6xxSVsdMMzeZ6BTppj0MUNV6X42Y&v=3.exp&libraries=geometry,drawing",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
)(Map)

