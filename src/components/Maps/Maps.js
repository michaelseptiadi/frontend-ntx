import React from "react";
import { MapContainer, TileLayer, Marker,Tooltip} from 'react-leaflet'
import LocationMarker from "./LocationMarker";
import dataEmployee from "../../data/dataEmployee";
import markerIconPng from "leaflet/dist/images/marker-icon-2x.png"
import {Icon} from 'leaflet'

export default function Maps(){

  return(
    <MapContainer center={[-6.212843285013057, 106.83094329569272]} zoom={12} scrollWheelZoom={false}>
   <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <LocationMarker/>
    {dataEmployee.map(loc =>(
        <Marker position={[loc.latitude, loc.longtitude]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41]})}>
            <Tooltip sticky direction="top" opacity={1}>{loc.employee_name} Location</Tooltip>
        </Marker>
    ))}
  </MapContainer>
  )
}