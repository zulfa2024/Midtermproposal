"use client";

// This file shows a friendly error message if something breaks
// inside this route. Next.js automatically displays this component
// when an error is thrown in a Server Component.

export default function ErrorPage({ error, reset }: any) {
  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
      <p className="mb-4">{error?.message}</p>

      <button
        onClick={() => reset()} // retry the route
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Try Again
      </button>
    </div>
  );
}
