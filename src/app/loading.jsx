export default function DefaultLoadingPage() {
  // animated with spinner
  // return (
  //   <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
  //     <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
  //     <p className="mt-4 text-lg text-gray-600">Loading...</p>
  //   </div>
  // );

  // bg color animated with spinner
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 via-stone-300 to-gray-400 animate-pulse">
      <div className="w-16 h-16 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
      <p className="mt-4 text-lg text-gray-600">Loading...</p>
    </div>
  );

  // three dot animated
  // return (
  //   <div className="flex flex-row space-x-3 items-center justify-center min-h-screen">
  //     <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
  //     <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-150"></div>
  //     <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-300"></div>
  //   </div>
  // );
}
