import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './map.css'
import Header from "../Header/Header"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Preload from '../preload/preload'
import MarkerClusterGroup from 'react-leaflet-markercluster';
import L from 'leaflet';
import Transac from '../transac/transac'

import markerBuyer from '../assets/euros.png';

import home from '../assets/home.png';

import iconFarmers from '../assets/66307.png';
import transac from '../transac/transac';


function Map() {

  const [buyers, setBuyers] = useState([])
  const [farmers, setFarmers] = useState([])

  // const avatar = [man1, man2, man3, man4, man5, man6, man7, man8, man9, man10, man11, man12, man13, man14, man15, man16, man17, man18, man19, man20, man21, man22, man23, man24, woman1, woman2, woman3, woman4, woman5, woman6, woman7, woman8, woman9, woman10, woman11, woman12, woman13, woman14, woman15, woman16, woman17, woman18, woman19, woman20, woman21, woman22, woman23, woman24]

  // const random = avatar[Math.floor(Math.random() * avatar.length)];



  const markerBuyers = L.icon({
    iconUrl: markerBuyer,
    iconSize: [60, 60],
    iconAnchor: [40, 60],
  });

  const farmerBuyers = L.icon({
    iconUrl: iconFarmers,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const homes = L.icon({
    iconUrl: home,
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
      <Preload />
      <Header />
      <Transac />
      <MapContainer center={setMap} zoom={10} className="map">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[48.448550, 1.538156]} icon={homes}>
          <Popup>
            <a href="https://comparateuragricole.com/"><h2>ComparateurAgricole.com</h2></a>
          </Popup>
        </Marker>
        {buyers.map((buyers) =>

          <Marker position={[buyers.lat, buyers.long]} icon={markerBuyers}>
            <Popup>
              <h1>{buyers.name}</h1>
              <h2>Type: {buyers.type}</h2>
            </Popup>
          </Marker>
        )}
        <MarkerClusterGroup
          onClusterClick={cluster =>
            console.warn('cluster-click', cluster, cluster.layer.getAllChildMarkers())
          }
        >
          {farmers.slice(0, 100).map((farmers) =>
            <Marker position={[farmers.lat, farmers.long]} icon={farmerBuyers}>
              <Popup>
                <h2>Taille de l'exploitation: {farmers.farm_size}ha</h2>
                <h2>Dernier article vendu : {farmers.name} <br />le: {farmers.created_at}</h2>
                <h2>Inscrit depuis le: {farmers.registered_at}</h2>
              </Popup>
            </Marker>

          )}
        </MarkerClusterGroup>
      </MapContainer>
    </div >
  );
}

export default Map;