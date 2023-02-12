import React from "react";
import { useNavigate } from "react-router-dom";

export const ShowCorrectAwnsers = ({ user }) => {
  const navigate = useNavigate();
  return (
    <div className="text-center p-8 space-y-4 fixed bottom-10 top-10 left-1/3 right-1/3 max-lg:left-1/4 max-lg:right-1/4 max-md:left-10 max-md:right-10  backdrop-blur-md bg-slate-500/30 shadow-2xl overflow-auto max-md:text-sm">
      <h2 className="text-xl max-md:text-base font-semibold text-sky-500 pb-4">
        جواب صحیح سوالات
      </h2>
      {Object.values(user)
        .slice(2, 27)
        .map((item) => (
          <p className=" text-slate-50">{item}</p>
        ))}
      <button
        onClick={() => navigate(`/users/${user.id}`)}
        className=" bg-sky-500 hover:bg-sky-700 text-slate-50 py-2 px-5 rounded-full "
      >
        متوجه شدم
      </button>
    </div>
  );
};
