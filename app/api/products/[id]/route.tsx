import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  } else {
    return NextResponse.json({ id: 1, name: "Pro1", price: 100 });
  }
}

export function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  if (params.id > 10) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  return NextResponse.json({ id: 1, name: "pro1", price: 100 });
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10) {
    return NextResponse.json({ error: "Product not found!" }, { status: 404 });
  }
  return NextResponse.json({});
}
