"use client";
// This must be a Client Component because it uses:
// - an onClick event for the retry button
// - the reset() function, which only works on the client
// Error components need to run in the browser to let the user retry the route.
export default function NewTaskError({ error, reset }: any) {
  return (
    <div className="max-w-xl mx-auto p-8 space-y-4">
      <h1 className="text-2xl font-bold text-red-600">Error</h1>
      <p className="text-gray-700">
        {error?.message || "Unable to load form."}
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
