"use client";
import { useEffect, useState } from "react";

export default function LocationViewer() {
  const [location, setLocation] = useState({ ip: "", city: "", country: "" });

  useEffect(() => {
    fetch("/api/get-location")
      .then((res) => res.json())
      .then((data) => setLocation(data));
  }, []);

  return (
    <div>
      <h1>Your IP Address: {location.ip}</h1>
      <h2>
        Location: {location.city}, {location.country}
      </h2>
    </div>
  );
}
