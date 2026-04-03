import { NextResponse } from "next/server";
import connect from "@/utils/db";
import mongoose from "mongoose";
import "@/models/Post"; // just import to register schema

export const GET = async (request, { params }) => {
  const { id } = await params; // ✅ FIX

  try {
    await connect();

    const Post = mongoose.models.Post;

    const post = await Post.findById(id);

    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (err) {
    console.log(err);

    return NextResponse.json({ message: "Database Error" }, { status: 500 });
  }
};
