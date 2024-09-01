import React from "react";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="text-center">
        <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-red-500"></div>
        <h2 className="text-white text-2xl font-semibold mt-4">Loading...</h2>
      </div>
    </div>
  );
}
