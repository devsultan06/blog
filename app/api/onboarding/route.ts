import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
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

    } catch (error: unknown) {
        if (
            typeof error === "object" &&
            error !== null &&
            "code" in error &&
            (error as PrismaClientKnownRequestError).code === "P2002"
        ) {
            const target = (error as PrismaClientKnownRequestError).meta?.target;

            if (Array.isArray(target) && target.includes("userId")) {
                return NextResponse.json(
                    { message: "User already exists" },
                    { status: 409 }
                );
            }

            if (Array.isArray(target) && target.includes("username")) {
                return NextResponse.json(
                    { message: "Username already taken" },
                    { status: 409 }
                );
            }

            return NextResponse.json(
                { message: "Duplicate field error" },
                { status: 409 }
            );
        }

        console.error("❌ Unknown error:", error);
        return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 }
        );
    }

}
