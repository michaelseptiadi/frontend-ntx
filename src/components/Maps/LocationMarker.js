import React, {useState, useEffect} from "react"
import {Marker, Tooltip } from 'react-leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon-2x.png"
import {Icon} from 'leaflet'

export default function LocationMarker() {
    const [position, setPosition] = useState(null)
    
    const getLocation = () =>{
        navigator.geolocation.getCurrentPosition(function(position) {
            setPosition([position.coords.latitude, position.coords.longitude])
          });
    }

    useEffect(()=>{
        getLocation()
    })
  
    return position === null ? null : (
      <Marker position={position} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41]})}>
        <Tooltip>You are here</Tooltip>
      </Marker>
    )
  }