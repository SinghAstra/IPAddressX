"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

interface IPAddressInfo {
  ip: string;
  city: string;
  country: string;
  isp: string;
}

const IPInfo = () => {
  const [ipAddressInfo, setIpAddressInfo] = useState<IPAddressInfo | null>(
    null
  );
  const [isFetching, setIsFetching] = useState(true);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchIPInfo = async () => {
      try {
        setIsFetching(true);
        const response = await fetch("/api/info");

        if (!response.ok) {
          throw new Error(`Failed to fetch location data: ${response.status}`);
        }

        const data = await response.json();
        setIpAddressInfo(data);
      } catch (error) {
        if (error instanceof Error) {
          console.log("error.stack is ", error.stack);
          console.log("error.message is ", error.message);
        }
        setMessage("Failed to fetch IP information. Please try again later.");
      } finally {
        setIsFetching(false);
      }
    };

    fetchIPInfo();
  }, []);

  useEffect(() => {
    if (!message) return;
    toast(message);
    setMessage(null);
  }, [message]);

  if (isFetching) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="rounded bg-muted/40 p-6 flex flex-col items-center">
          <p>Loading your IP information...</p>
        </div>
      </div>
    );
  }

  if (!ipAddressInfo) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="rounded bg-muted/40 p-6 flex flex-col items-center">
          <p>Could Not Fetch IP Address.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="rounded bg-muted/40 flex flex-col items-start justify-center gap-2 p-6 shadow-md">
        <h1 className="text-xl font-bold">
          Your IP Address: {ipAddressInfo.ip}
        </h1>
        <h2 className="text-lg">
          Location: {ipAddressInfo.city}, {ipAddressInfo.country}
        </h2>
        <h2 className="text-lg">ISP: {ipAddressInfo.isp}</h2>
      </div>
    </div>
  );
};

export default IPInfo;
