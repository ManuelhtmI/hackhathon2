import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './map.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EsriLeafletGeoSearch from "react-esri-leaflet/plugins/EsriLeafletGeoSearch";


function Map() {

    const [buyers, setBuyers] = useState([])
    const [farmers, setFarmers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/citiesBuyers')
            .then((res) => setBuyers(res.data))
    }, [])

    useEffect(() => {
      axios.get('http://localhost:8000/api/citiesFarmers')
      .then((res) => setFarmers(res.data))
    }, [])

    let setMap = [48.4469, 1.4892]

  return (
    <div>
      <head>
        <link rel="stylesheet" href="https://unpkg.com/esri-leaflet-geocoder@2.3.4/dist/esri-leaflet-geocoder.css"></link>
      </head>
      <div id="mapid">
        <MapContainer center={setMap} zoom={7} className="map">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {buyers.map((buyers)=>
          <Marker position={[buyers.lat, buyers.long]}>
            <Popup>
              {buyers.lat}
          </Popup>
              </Marker>
          )}
          {farmers.slice(0,1000).map((farmers)=>
          <Marker position={[farmers.lat, farmers.long]}>
            <Popup>
              {farmers.lat}
          </Popup>
              </Marker>
          )}
          <EsriLeafletGeoSearch
            position="topleft"
            useMapBounds={false}
          />
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;