"use client";
import { useEffect, useState } from "react";

export default function IpViewer() {
  const [ip, setIp] = useState("");

  useEffect(() => {
    fetch("/api/get-ip")
      .then((res) => res.json())
      .then((data) => setIp(data.ip));
  }, []);

  return (
    <div>
      <h1>Your IP Address:</h1>
      <p>{ip}</p>
    </div>
  );
}
