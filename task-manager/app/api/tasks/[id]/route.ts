import { connectDB } from "@/lib/mongodb";
import Task from "@/models/Task";
import { NextResponse } from "next/server";

export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> },
) {
  await connectDB();

  const { id } = await context.params;

  const { title, description } = await req.json();

  await Task.findByIdAndUpdate(id, { title, description });

  return NextResponse.json({ message: "Task updated" });
}

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> },
) {
  await connectDB();

  const { id } = await context.params;

  await Task.findByIdAndDelete(id);

  return NextResponse.json({ message: "Task deleted" });
}
