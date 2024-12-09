import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 37.7749, // Latitude
  lng: -122.4194, // Longitude (San Francisco)
};
const locations = [
    { lat: 37.7749, lng: -122.4194 },
    { lat: 34.0522, lng: -118.2437 },
  ];

function App() {
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
   

<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
  {locations.map((location, index) => (
    <Marker key={index} position={location} />
  ))}
</GoogleMap>;

    </LoadScript>
  );
}

export default App;
