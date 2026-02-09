// This loading component appears while the New Task page is still fetching data.
// Next.js automatically shows this file to prevent a blank screen and improve UX (User Experience).
export default function LoadingNewTask() {
  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-2xl font-semibold">Loading...</h1>
      <p className="text-gray-600 mt-2">Preparing form.</p>
    </div>
  );
}
