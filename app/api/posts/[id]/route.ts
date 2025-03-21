import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// UPDATE method (update a post)
export async function PUT(req: NextRequest, context: { params: { id: string } }) {
  try {
    const id = context.params?.id;
    if (!id) return NextResponse.json({ message: "ID is required" }, { status: 400 });

    const body = await req.json();
    const { title, content, action } = body; // Action can be "like" or "share"

    let updatedPost;

    if (action === "like") {
      updatedPost = await prisma.post.update({
        where: { id },
        data: { likes: { increment: 1 } }, // Increment likes
      });
    } else if (action === "share") {
      updatedPost = await prisma.post.update({
        where: { id },
        data: { shares: { increment: 1 } }, // Increment shares
      });
    } else if (title || content) {
      updatedPost = await prisma.post.update({
        where: { id },
        data: { title, content },
      });
    } else {
      return NextResponse.json({ message: "Invalid request" }, { status: 400 });
    }

    return NextResponse.json(updatedPost);
  } catch (error) {
    return NextResponse.json({ message: "Failed to update post", error: (error as Error).message }, { status: 500 });
  }
}


// DELETE method (delete a post)
export async function DELETE(req: NextRequest, context: { params: { id: string } }) {
  try {
    const id = context.params?.id;
    if (!id) return NextResponse.json({ message: "ID is required" }, { status: 400 });

    // Check if the post exists
    const existingPost = await prisma.post.findUnique({ where: { id } });
    if (!existingPost) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    await prisma.post.delete({ where: { id } });

    return NextResponse.json({ message: "Post deleted successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to delete post", error: (error as Error).message }, { status: 500 });
  }
}
