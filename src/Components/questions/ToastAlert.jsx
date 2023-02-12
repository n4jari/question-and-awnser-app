import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const ToastAlert = ({ url }) => {
  return (
    <div className=" max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5">
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-900">
              لینک زیر را برای دوستانتان ارسال کنید تا دسترسی سریع تری به سوالات
              شما داشته باشند.
            </p>
            <p className="mt-1 text-sm text-sky-400">{url}</p>
          </div>
        </div>
      </div>
      <div className="flex">
        <CopyToClipboard text={url}>
          <button className=" focus:text-red-500 w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            کپی
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};
