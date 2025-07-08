import LoadingSpinner from "@/components/LoadingSpinner";
import React from "react";

function CommonLoader() {
  return (
    <div className="flex justify-center items-center h-full min-h-[50vh]">
      <LoadingSpinner />
    </div>
  );
}

export default CommonLoader;
