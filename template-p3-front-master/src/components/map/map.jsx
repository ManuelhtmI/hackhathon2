import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './map.css'
import Header from "../Header/Header"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Preload from '../preload/preload'
import MarkerClusterGroup from 'react-leaflet-markercluster';
import L from 'leaflet';

import markerBuyer from '../assets/euros.png';

import man1 from '../assets/Man1_1.png';
import man2 from '../assets/Man1_2.png';
import man3 from '../assets/Man1_3.png';
import man4 from '../assets/Man1_4.png';
import man5 from '../assets/Man1_5.png';
import man6 from '../assets/Man1_6.png';
import man7 from '../assets/Man1_7.png';
import man8 from '../assets/Man1_8.png';
import man9 from '../assets/Man2_1.png';
import man10 from '../assets/Man2_2.png';
import man11 from '../assets/Man2_3.png';
import man12 from '../assets/Man2_4.png';
import man13 from '../assets/Man2_5.png';
import man14 from '../assets/Man2_6.png';
import man15 from '../assets/Man2_7.png';
import man16 from '../assets/Man2_8.png';
import man17 from '../assets/Man3_1.png';
import man18 from '../assets/Man3_2.png';
import man19 from '../assets/Man3_3.png';
import man20 from '../assets/Man3_4.png';
import man21 from '../assets/Man3_5.png';
import man22 from '../assets/Man3_6.png';
import man23 from '../assets/Man3_7.png';
import man24 from '../assets/Man3_8.png';
import woman1 from '../assets/Woman1_1.png';
import woman2 from '../assets/Woman1_2.png';
import woman3 from '../assets/Woman1_3.png';
import woman4 from '../assets/Woman1_4.png';
import woman5 from '../assets/Woman1_5.png';
import woman6 from '../assets/Woman1_6.png';
import woman7 from '../assets/Woman1_7.png';
import woman8 from '../assets/Woman1_8.png';
import woman9 from '../assets/Woman2_1.png';
import woman10 from '../assets/Woman2_2.png';
import woman11 from '../assets/Woman2_3.png';
import woman12 from '../assets/Woman2_4.png';
import woman13 from '../assets/Woman2_5.png';
import woman14 from '../assets/Woman2_6.png';
import woman15 from '../assets/Woman2_7.png';
import woman16 from '../assets/Woman2_8.png';
import woman17 from '../assets/Woman3_1.png';
import woman18 from '../assets/Woman3_2.png';
import woman19 from '../assets/Woman3_3.png';
import woman20 from '../assets/Woman3_4.png';
import woman21 from '../assets/Woman3_5.png';
import woman22 from '../assets/Woman3_6.png';
import woman23 from '../assets/Woman3_7.png';
import woman24 from '../assets/Woman3_8.png';

import home from '../assets/home.png';


function Map() {

  const [buyers, setBuyers] = useState([])
  const [farmers, setFarmers] = useState([])

  const avatar = [man1, man2, man3, man4, man5, man6, man7, man8, man9, man10, man11, man12, man13, man14, man15, man16, man17, man18, man19, man20, man21, man22, man23, man24, woman1, woman2, woman3, woman4, woman5, woman6, woman7, woman8, woman9, woman10, woman11, woman12, woman13, woman14, woman15, woman16, woman17, woman18, woman19, woman20, woman21, woman22, woman23, woman24]

  const markerFarmers = L.icon({
    iconUrl: avatar[Math.floor(Math.random() * avatar.length)],
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  })

  const markerBuyers = L.icon({
    iconUrl: markerBuyer,
    iconSize: [60, 60],
    iconAnchor: [40, 60],
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
          {farmers.map((farmers) => 
            <Marker position={[farmers.lat, farmers.long]} icon={markerFarmers} >
              <Popup>
                <h2>Taille de l'exploitation: {farmers.farm_size}ha</h2>
              </Popup>
            </Marker>

          )}
        </MarkerClusterGroup>
      </MapContainer>
    </div >
  );
}

export default Map;