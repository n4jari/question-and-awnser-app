import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>اپلیکیشن بهترین دوست من کیه؟</title>
      </Helmet>
      <div className="relative">
        <div className="flex gap-2 absolute  bottom-2 right-2 max-sm:text-xs">
          <span className="text-slate-400">ساخته شده توسط</span>
          <a
            href="https://n4jari.ir"
            className="text-sky-500 uppercase"
            target="_blank"
          >
            n4jari.ir
          </a>
        </div>
        <div className="text-slate-400 absolute bottom-2 left-2 max-sm:text-xs">
          <span>Version 1.1.1</span>
        </div>

        <div className="py-4 h-screen flex flex-col items-center justify-center">
          <h2 className="animate-bounce max-sm:text-xl text-2xl font-bold text-slate-200">
            بهترین دوست من کیه ؟
          </h2>

          <br />

          <div className="flex gap-5">
            <Link
              to="/createqb"
              className=" max-sm:text-sm bg-sky-500 hover:bg-sky-700 text-slate-50 py-2 px-6  rounded-full"
            >
              ساخت جعبه سوالات
            </Link>
            <Link
              to="/users"
              className=" max-sm:text-sm  bg-sky-500 hover:bg-sky-700 text-slate-50 py-2 px-6 rounded-full"
            >
              جستجوی کاربران
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
