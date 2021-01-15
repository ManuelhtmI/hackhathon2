import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet'
import './map.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import L from 'leaflet';
import markerBuyer from '../assets/euros.png';
import home from '../assets/home.png';
import iconFarmers from '../assets/66307.png';
import useGeoLocation from '../hooks/useGeolocation';

function Map() {

  const [buyers, setBuyers] = useState([])
  const [farmers, setFarmers] = useState([])
  const location = useGeoLocation();
  const [countClose, setCountClose] = useState(0);
  const [latMin, setLatMin] = useState(0)
  const [latMax, setLatMax] = useState(0)
  const [lngMin, setLngMin] = useState(0)
  const [lngMax, setLngMax] = useState(0)

  useEffect(() => {
    if (location.loaded === true) {
      setLatMin(location.coordinates.lat - 0.180227)
      setLatMax(location.coordinates.lat + 0.180227)
      setLngMin(location.coordinates.lng - 0.246349)
      setLngMax(location.coordinates.lng + 0.246349)
    } else {
      setLatMin(0)
      setLatMax(0)
      setLngMin(0)
      setLngMax(0)
    }
  }, [location])

  let countTrans = farmers.filter(function (farmer) {
    return (farmer.lat <= latMax && farmer.lat >= latMin && farmer.long <= lngMax && farmer.long >= lngMin)
  })

  useEffect(() => {
    setCountClose(countTrans.length)
  }, [countTrans])

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
  }, []);

  let setMap = [48.4469, 1.4892]

  return (
    <div id="mapid">
      <MapContainer center={setMap} zoom={9} className="map">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[48.448550, 1.538156]} icon={homes}>
          <Popup>
            <a href="https://comparateuragricole.com/"><h2>ComparateurAgricole.com</h2></a>
          </Popup>
        </Marker>
        {location.loaded === true ?
          <Marker position={[location.coordinates.lat, location.coordinates.lng]}>
            <Popup>
              <h2>{countClose} transactions ont eu lieu près de chez vous !</h2>
            </Popup>
            <Circle center={[location.coordinates.lat, location.coordinates.lng]} radius={20000} />
          </Marker>
          : null}
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
          {farmers.slice(0, 1000).map((farmers) =>
            <Marker position={[farmers.lat, farmers.long]} icon={farmerBuyers}>
              <Popup>
                <h2 className="farmerText">Taille de l'exploitation: {farmers.farm_size}ha</h2>
                <h2 className="farmerText">Dernier article vendu : {farmers.name}</h2>
                <h2 className="farmerText">le: {farmers.created_at}</h2>
                <h2 className="farmerText">Inscrit depuis le: {farmers.registered_at}</h2>
                <div className="farmerCategory">
                  <img src={farmers.avatar} alt={farmers.name} className="farmerAvatar" />
                </div>
              </Popup>
            </Marker>
          )}
        </MarkerClusterGroup>
      </MapContainer>
    </div >
  );
}

export default Map;