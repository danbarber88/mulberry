import React from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'

import mapIcon from '../images/map-icon.svg'
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
      <Marker
        icon={{
          url: mapIcon,
          scaledSize: { width: 32, height: 32 },
        }}
        position={{ lat: 53.755529, lng: -0.382204 }}
      />
    </GoogleMap>
  ))
)

export default Map
