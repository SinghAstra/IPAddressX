import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0] : request.headers.get("host");

  const res = await fetch(`http://ip-api.com/json/${ip}`);
  if (!res.ok) {
    console.log("response is ", res);
    return NextResponse.json(
      { message: "Failed to fetch location data" },
      { status: 500 }
    );
  }
  const data = await res.json();
  console.log("data is ", data);

  return NextResponse.json({
    ip,
    city: data.city,
    country: data.country,
    isp: data.isp,
  });
}
