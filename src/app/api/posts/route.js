import { NextResponse } from "next/server";
import connect from "@/utils/db";
import mongoose from "mongoose";
import "@/models/Post"; // just import to register schema

export const GET = async () => {
  try {
    await connect();

    // ✅ safely get already compiled model
    const Post = mongoose.models.Post;

    const posts = await Post.find();

    return NextResponse.json(posts, { status: 200 });
  } catch (err) {
    console.log(err); // helpful for debugging
    return NextResponse.json("Database Error", { status: 500 });
  }
};
