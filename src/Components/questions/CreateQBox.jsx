import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { QuestionsItems } from "./QuestionsItems";
//IMPORT all file
import spinnerGIF from "../../Assets/img/spinner.gif";

//IMPORT icons from react-icons
import { FcBusinessman, FcCalendar } from "react-icons/fc";
import { MdError } from "react-icons/md";

//IMPORT URL
import {
  createUserQuestion,
  getAllCategorys,
  URL_SERVER,
} from "../../Services/AppService";

//IMPORT all Components
import { AvatarItems } from "./AvatarItems";
import { questionsSchema } from "../../Validation/QuestionsValidate";
import { categorys } from "../../Features/categorys/categorysSlice";
import { contextApp } from "./../../Contexts/contextApp";
import { ToastAlert } from "./ToastAlert";
import { Helmet } from "react-helmet-async";
export const CreateQBox = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { spinner, setSpinner } = useContext(contextApp);

  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setSpinner(true);

        const index = Math.floor(Math.random() * AvatarItems.length);
        setAvatar(AvatarItems[index]);

        const { data: categorysData } = await getAllCategorys();

        dispatch(categorys(categorysData));

        setSpinner(false);
      } catch (err) {
        setSpinner(false);
        toast.error("متاسفانه مشکلی پیش آمد.");
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const createQuestions = async (values) => {
    try {
      setSpinner(true);

      //add avatar to questions list
      const allValues = { ...values, avatar: avatar };

      const { status, data } = await createUserQuestion(allValues);

      setSpinner(false);

      if (status === 201) {
        const url = `${URL_SERVER}/users/${data.id}`;
        toast.success("اطلاعات شما با موفقیت ثبت شد.");

        toast.custom(<ToastAlert url={url} />, {
          duration: 7000,
          position: "top-center",
        });
        navigate("/");
      } else {
        toast.error("متاسفانه مشکلی پیش آمد.");
      }
    } catch (err) {
      setSpinner(false);
      console.log(err.message);
      toast.error("متاسفانه مشکلی پیش آمد.");
    }
  };

  return (
    <>
      <Helmet>
        <title>اپلیکیشن بهترین دوست من کیه؟ | ساخت جعبه سوالات</title>
      </Helmet>
      {!spinner ? (
        <Formik
          initialValues={{
            username: "",
            idNumber: "",
            q1: "",
            q2: "",
            q3: "",
            q4: "",
            q5: "",
            q6: "",
            q7: "",
            q8: "",
            q9: "",
            q10: "",
            q11: "",
            q12: "",
            q13: "",
            q14: "",
            q15: "",
            q16: "",
            q17: "",
            q18: "",
            q19: "",
            q20: "",
            q21: "",
            q22: "",
            q23: "",
            q24: "",
            q25: "",
          }}
          validationSchema={questionsSchema}
          onSubmit={(values) => {
            if (!values) {
              alert("false");
            }
            createQuestions(values);
          }}
        >
          <Form className="flex max-sm:space-y-6 space-y-8 flex-col max-sm:mx-6 mx-10 max-sm:my-10 my-16 ">
            <div className="flex justify-center max-md:flex-col items-center gap-4 text-lg text-slate-200">
              <div className="flex gap-4 items-center">
                <FcBusinessman fontSize="30" />
                <Field
                  name="username"
                  type="text"
                  placeholder="نام کاربری خود را وارد"
                  className="text-slate-400 border border-slate-600 bg-slate-800 appearance-none rounded-full max-sm:py-1.5 py-2 px-4  w-60 outline-none text-sm"
                />
              </div>

              <div className="flex gap-4 items-center">
                <FcCalendar fontSize="30" />

                <Field
                  name="idNumber"
                  type="number"
                  placeholder="سال تولد خود را وارد کنید."
                  className="text-slate-400 border border-slate-600 bg-slate-800 appearance-none rounded-full max-sm:py-1.5 py-2 px-4  w-60 outline-none text-sm"
                />
              </div>
            </div>
            <ErrorMessage name="username">
              {(msg) => (
                <div className="text-red-500 sm:text-sm flex justify-center items-center gap-2">
                  <MdError /> {msg}
                </div>
              )}
            </ErrorMessage>
            <ErrorMessage name="idNumber">
              {(msg) => (
                <div className="text-red-500 sm:text-sm flex justify-center items-center gap-2">
                  <MdError /> {msg}
                </div>
              )}
            </ErrorMessage>

            <QuestionsItems />

            <div className="flex justify-center gap-5">
              <input
                type="submit"
                value="ثبت"
                className="max-sm:text-sm bg-sky-500 hover:bg-sky-700 cursor-pointer text-slate-50  py-2 px-8 rounded-full "
              />

              <Link
                to="/"
                className=" max-sm:text-sm bg-sky-500 hover:bg-sky-700 text-slate-50 py-2 px-5 rounded-full "
              >
                بازگشت
              </Link>
            </div>
          </Form>
        </Formik>
      ) : (
        <div className="h-screen flex justify-center items-center flex-col">
          <img src={spinnerGIF} alt="" className="w-1/12" />
          <p className="text-sky-400">منتظر بمانید ..</p>
        </div>
      )}
    </>
  );
};
