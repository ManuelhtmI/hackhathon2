import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './map.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';


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
      </MapContainer>
    </div>
  );
}

export default Map;