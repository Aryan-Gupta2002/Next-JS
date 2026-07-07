import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    name: "Aryan",
    email: "aryan123@gmail.com",
  });
}
