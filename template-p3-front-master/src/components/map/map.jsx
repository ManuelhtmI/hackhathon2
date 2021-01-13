import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './map.css'

function Map() {

    let setMap = [48.4469, 1.4892]

  return (
    <div id="mapid">
      <MapContainer center={setMap} zoom={7} className="map">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={setMap}>
          <Popup>
            Centre <br /> de la france.
    </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;