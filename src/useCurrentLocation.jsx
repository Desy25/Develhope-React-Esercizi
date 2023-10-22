import { useState } from "react";

export function useCurrentLocation() {
  const [location, setLocation] = useState({
    latitude: "",
    longitude: "",
    positionLink: ""
  });

  function findMyPosition () {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        positionLink: `https://www.openstreetmap.org/#map=18/${position.coords.latitude}/${position.coords.longitude}`
      });
    });
  };

  return { findMyPosition, ...location };
};