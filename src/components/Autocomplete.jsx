import React, { useState } from "react";
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from "@geoapify/react-geocoder-autocomplete";

const API_KEY = "afa901301d814d4bade02390df862287";

export default function Autocomplete() {
  const [info, setInfo] = useState(null);

  function onPlaceSelect(data) {
    setInfo(data);
  }
  function sendGeocoderRequest(value, geocoder) {
    return geocoder.sendGeocoderRequest(value);
  }

  function sendPlaceDetailsRequest(feature, geocoder) {
    return geocoder.sendPlaceDetailsRequest(feature);
  }

  return (
    <div>
      <GeoapifyContext apiKey={API_KEY}>
        <GeoapifyGeocoderAutocomplete
          placeholder="Starting location"
          placeSelect={onPlaceSelect}
          onChange={setInfo}
          sendGeocoderRequestFunc={sendGeocoderRequest}
          sendPlaceDetailsRequestFunc={sendPlaceDetailsRequest}
        />
      </GeoapifyContext>
    </div>
  );
}
