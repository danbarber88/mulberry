import React from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'

const mapStyles = require('../utils/mapStyles.json')

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 53.755539, lng: -0.382404 }}
      defaultOptions={{
        styles: mapStyles.styles,
        disableDefaultUI: true,
      }}
    >
      <Marker position={{ lat: 53.755539, lng: -0.382404 }} />
    </GoogleMap>
  ))
)

export default Map
