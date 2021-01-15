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
import hectares from "../../assets/hectares.png";
import transaction from "../../assets/transaction2.png";
import Preload from "../preload/preload";
import EsriLeafletGeoSearch from "react-esri-leaflet/plugins/EsriLeafletGeoSearch";


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
    axios
      .get("http://localhost:8000/api/citiesBuyers")
      .then((res) => setBuyers(res.data));
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8000/api/citiesFarmers')
      .then((res) => setFarmers(res.data))
  }, []);

  let setMap = [48.4469, 1.4892]

  return (
    <div id="mapid">
      <Preload />
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/esri-leaflet-geocoder@2.3.4/dist/esri-leaflet-geocoder.css"
        ></link>
      </head>
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
              <a href="https://comparateuragricole.com/">
                <h2>ComparateurAgricole.com</h2>
              </a>
            </Popup>
          </Marker>

        )}
        <MarkerClusterGroup
          onClusterClick={cluster =>
            console.warn('cluster-click', cluster, cluster.layer.getAllChildMarkers())
          }
        >
          <EsriLeafletGeoSearch position="topleft" useMapBounds={false} />
          {farmers.slice(0, 1000).map((farmers) =>
            <Marker position={[farmers.lat, farmers.long]} icon={farmerBuyers}>
              <Popup maxHeight={250} maxWidth={350}>
                <div className="farmerCategory">
                  <h5 className="infosMini2">Profil agriculteur</h5>

                  <img
                    src={farmers.avatar}
                    alt={farmers.name}
                    className="farmerAvatar"
                  />
                </div>

                <div className="fieldSize">
                  <div className="farmSize">
                    <h5 className="farmerText">Taille de l'exploitation:</h5>
                    <div id="hectares">
                      <h5 className="infosTitles">{farmers.farm_size}</h5>{" "}
                      <p className="infosMini">HECTARES </p>
                    </div>
                    <img
                      className="fieldpicture"
                      alt="field"
                      src={hectares}
                    />
                  </div>
                </div>
                <hr className="separator">

                </hr>
                <div className="lastSell">
                  <h5 className="farmerText">Derniere transaction : </h5>{" "}
                  <p className="infosTitlesBorder">{farmers.name}</p>
                  <h5 className="farmerText">
                    {" "}
                      effectuée le: {farmers.created_at}
                  </h5>
                  <img
                    className="transactionPicture"
                    alt="field"
                    src={transaction}
                  />
                </div>
                <hr className="separator2"></hr>
                <div className="registeredAt">
                  <h5 className="farmerText">
                    A rejoint ComparateurAgricole depuis le:{" "}
                  </h5>
                  <p className="infosMini">{farmers.registered_at}</p>
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
