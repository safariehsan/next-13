import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: 1,
      name: "pro1",
      price: 100,
    },
    {
      id: 2,
      name: "pro2",
      price: 200,
    },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }
  return NextResponse.json(
    { id: 1, name: body.name, price: 100 },
    { status: 201 }
  );
}
