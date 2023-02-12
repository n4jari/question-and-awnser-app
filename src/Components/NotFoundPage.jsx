import React from "react";

export const NotFoundPage = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <p className=" animate-pulse text-xl border border-sky-400 px-4 py-2 rounded-full text-sky-400 ">
        {children}
      </p>
    </div>
  );
};
