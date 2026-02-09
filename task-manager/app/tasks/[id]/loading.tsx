// This loading component shows a temporary UI while the task details
// are being fetched. Next.js automatically displays this file whenever
// the /tasks/[id] page is still loading data from the server.
export default function LoadingTask() {
  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-2xl font-semibold">Loading task...</h1>
      <p className="text-gray-600 mt-2">Fetching task details.</p>
    </div>
  );
}
