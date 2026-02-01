"use client";

export default function ErrorPage({ error, reset }: any) {
  return (
    <div className="max-w-2xl mx-auto p-8 space-y-4">
      <h1 className="text-2xl font-bold text-red-600">Something went wrong</h1>
      <p className="text-gray-700">
        {error?.message || "Failed to load tasks."}
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
