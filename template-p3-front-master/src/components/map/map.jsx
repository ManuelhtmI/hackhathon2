import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './map.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import L from 'leaflet';

import markerBuyer from '../assets/euros.png'


function Map() {

  const [buyers, setBuyers] = useState([])
  const [farmers, setFarmers] = useState([])

  const markerBuyers = L.icon({
    iconUrl: markerBuyer,
    iconSize: [60, 60],
    iconAnchor: [40, 60],
  });

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
    <div id="mapid">
      <MapContainer center={setMap} zoom={7} className="map">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {buyers.map((buyers) =>

          <Marker position={[buyers.lat, buyers.long]} icon={markerBuyers}>
            <Popup>
              {buyers.lat}
            </Popup>
          </Marker>
        )}
          <MarkerClusterGroup
            onClusterClick={cluster =>
              console.warn('cluster-click', cluster, cluster.layer.getAllChildMarkers())
            }
          >
        {farmers.map((farmers) =>
            <Marker position={[farmers.lat, farmers.long]} >
              <Popup>
                {farmers.lat}
              </Popup>
            </Marker>
          
        )}
        </MarkerClusterGroup>
      </MapContainer>
    </div >
  );
}

export default Map;