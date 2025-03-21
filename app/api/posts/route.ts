import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// GET method (fetch all posts with comments)
export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        comments: true, // Include related comments
      },
    });
    return NextResponse.json(posts);
  } catch {
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}

// POST method (create a new post)
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, content } = body;

    if (!title || !content) {
      return NextResponse.json({ message: "Title and content are required" }, { status: 400 });
    }

    const newPost = await prisma.post.create({
      data: { title, content },
    });

    return NextResponse.json(newPost, { status: 201 });
  } catch {
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
