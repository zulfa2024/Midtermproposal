import { connectDB } from "@/lib/mongodb";
import Task from "@/models/Task";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { title, description } = await req.json();

    const newTask = await Task.create({ title, description });

    return NextResponse.json(newTask);
  } catch (error) {
    return NextResponse.json({ error: "Error creating task" }, { status: 500 });
  }
}
