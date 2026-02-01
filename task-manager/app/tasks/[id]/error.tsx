"use client";

export default function TaskError({ error, reset }: any) {
  return (
    <div className="max-w-xl mx-auto p-8 space-y-4">
      <h1 className="text-2xl font-bold text-red-600">Error Loading Task</h1>
      <p className="text-gray-700">
        {error?.message || "Unable to load this task."}
      </p>

      <button
        onClick={() => reset()}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Try Again
      </button>
    </div>
  );
}
