import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('host');
    return NextResponse.json({ ip });
  }
  