import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

//IMPORT icons from react-icons
import { FcSearch } from "react-icons/fc";

//IMPORT all ACTIONS
import {
  usersQuestions,
  filteredUsersQuestions,
} from "../Features/questions/usersQuestionsSlice";

//IMPORT api
import { getAllUsersQuestions } from "../Services/AppService";

//IMPORT all files
import spinnerGIF from "../Assets/img/spinner.gif";
import { contextApp } from "./../Contexts/contextApp";
import { Helmet } from "react-helmet-async";

export const Users = () => {
  const dispatch = useDispatch();
  const { spinner, setSpinner } = useContext(contextApp);

  const questions = useSelector((state) => state.usersQuestions.questions);
  const filteredQuestions = useSelector(
    (state) => state.usersQuestions.filteredQuestions
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        setSpinner(true);
        const { data: usersQuestionsData } = await getAllUsersQuestions();
        dispatch(usersQuestions(usersQuestionsData));
        setSpinner(false);
      } catch (err) {
        setSpinner(false);
        toast.error("متاسفانه مشکلی پیش آمد.");
        console.log(err);
      }
    };
    fetchData();
  }, []);

  //search func
  const search = _.debounce((query) => {
    const filterItem = questions.filter((item) =>
      item.username.toString().includes(query.toLowerCase())
    );
    dispatch(filteredUsersQuestions(filterItem));
  }, 300);

  return (
    <>
      <Helmet>
        <title>اپلیکیشن بهترین دوست من کیه؟ | جستجوی کاربران</title>
      </Helmet>
      {!spinner ? (
        <div className=" flex max-sm:space-y-6 space-y-8 flex-col max-sm:mx-6 mx-10 max-sm:my-10 my-16">
          <div className="flex justify-center items-center gap-3">
            <FcSearch className="FcSearchIcon" />
            <input
              type="text"
              placeholder=" نام کاربری را جستجو کنید."
              className="text-slate-400 border border-slate-600 bg-slate-800 appearance-none rounded-full max-sm:py-1.5 py-2 px-4  w-60 outline-none text-sm"
              onChange={(e) => search(e.target.value)}
            />
            <Link
              to="/"
              className="max-sm:text-sm bg-sky-500 hover:bg-sky-700 text-slate-50 py-2 px-6 rounded-full "
            >
              بازگشت
            </Link>
          </div>

          <div className="fixed bottom-2 right-2 max-sm:text-xs">
            <span className="text-slate-400">تعداد کاربران : </span>
            <span className="text-sky-500">{questions.length}</span>
          </div>
          <div className="flex justify-center flex-col items-center gap-y-5 list-none">
            {filteredQuestions.map((item) => (
              <Link
                to={`/users/${item.id}`}
                key={item.id}
                className="max-lg:py-4 py-5 max-sm:px-8 px-10 max-sm:w-full md:w-10/12 lg:w-4/6 rounded-full text-center shadow-xl bg-slate-700 hover:bg-slate-900"
              >
                <li className="flex justify-between items-center font-semibold max-sm:text-base  text-xl">
                  <h2 className="flex items-center gap-4 text-sky-500 uppercase">
                    <img
                      src={item.avatar}
                      alt=""
                      className="max-sm:w-10 w-14 rounded-full"
                    />
                    {item.username}
                  </h2>
                  <h2 className="text-slate-400 ">{item.idNumber}</h2>
                </li>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center flex-col">
          <img src={spinnerGIF} alt="" className="w-1/12" />
          <p className="text-sky-400">منتظر بمانید ..</p>
        </div>
      )}
    </>
  );
};
