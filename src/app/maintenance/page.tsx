import { CogIcon } from "lucide-react";
import React from "react";

const Maintenance = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <p className="flex gap-1 text-4xl font-bold">
        <CogIcon size={45} /> we&apos;re fixing stuff, sry
      </p>
    </div>
  );
};

export default Maintenance;
