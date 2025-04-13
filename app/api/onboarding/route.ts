import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { fullName, username, niche, bio, userId } = body;

        if (!fullName || !username || !niche || !bio || !userId) {
            return NextResponse.json(
                { message: "All fields are required" },
                { status: 400 }
            );
        }

        const newUser = await prisma.user.create({
            data: {
                fullName,
                username,
                niche,
                bio,
                userId,
            },
        });

        return NextResponse.json(newUser, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 }
        );
    }
}
