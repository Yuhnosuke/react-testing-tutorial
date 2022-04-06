import React from 'react'
import { LoadScript, GoogleMap } from 'react-google-maps'

const Map = (props) => {
  return (
    <LoadScript id='script-loader' googleMapsApiKey='MY_API_KEY'>
      <GoogleMap id='example-map' center={props.center}/>
    </LoadScript>
  )
}

export default Map
