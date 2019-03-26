import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'

import { device } from '../utils/device'
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
