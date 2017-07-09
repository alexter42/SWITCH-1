import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const position = [23.8, -103.5]

export default class M extends React.Component {
  render () {
    return (
      <div className='map-container'>
        <Map zoomControl={false} center={position} zoom={5}>
          <TileLayer
            url='http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            attribution='©OpenStreetMap, ©CartoDB'
          />
        </Map>
      </div>
    )
  }
}
