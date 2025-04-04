export const dynamic = "force-dynamic";

interface IPAddressInfo {
  ip: string;
  city: string;
  country: string;
  isp: string;
}

const NEXT_PUBLIC_APP_URL = process.env.NEXT_PUBLIC_APP_URL;

const IPInfo = async () => {
  const response = await fetch(`${NEXT_PUBLIC_APP_URL}/api/info`);
  if (!response.ok) {
    throw new Error("Failed to fetch location data");
  }
  const ipAddressInfo: IPAddressInfo = await response.json();
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="rounded bg-muted/40 flex flex-col items-start justify-center gap-2 px-2 py-4">
        <h1>Your IP Address: {ipAddressInfo.ip}</h1>
        <h2>
          Location: {ipAddressInfo.city}, {ipAddressInfo.country}
        </h2>
        <h2>ISP: {ipAddressInfo.isp}</h2>
      </div>
    </div>
  );
};

export default IPInfo;
