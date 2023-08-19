import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST() {
  const userList = await prisma.user.findMany();
return NextResponse.json(userList);
}
