import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export async function POST(req: Request) {
    try {
      const body = await req.json();
      const { content, postId } = body;
  
      if (!content || !postId) {
        return NextResponse.json({ message: "Content and postId are required" }, { status: 400 });
      }
  
      const newComment = await prisma.comment.create({
        data: { content, postId },
      });
  
      return NextResponse.json(newComment, { status: 201 });
    } catch {
      return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
  }
  