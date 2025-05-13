import React from "react";
import { Loader } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <p className="flex gap-1 text-4xl font-bold">
        <Loader size={40} /> Loading destinations...
      </p>
    </div>
  );
};

export default NotFound;
