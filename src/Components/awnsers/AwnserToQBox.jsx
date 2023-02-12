import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

//IMPORT all components
import { createUserAwnser, getAllCategorys } from "../../Services/AppService";
import { pointCalculate } from "./pointCalculate";

//IMPORT icons from react-icons
import { FcBusinessman } from "react-icons/fc";

//IMPORT all API
import { getUser } from "../../Services/AppService";

//IMPORT validations
import { awnsersSchema } from "./../../Validation/AwnsersSchema";

//IMPORT all actions
import { userInfo } from "../../Features/user/userSlice";

//IMPORT all media
import spinnerGif from "../../Assets/img/spinner.gif";
import { contextApp } from "../../Contexts/contextApp";
import { QuestionsItems } from "./../questions/QuestionsItems";
import { categorys } from "../../Features/categorys/categorysSlice";
import { ShowCorrectAwnsers } from "../ShowCorrectAwnsers";
import { Helmet } from "react-helmet-async";

export const AwnserToQBox = () => {
  const { spinner, setSpinner } = useContext(contextApp);
  const user = useSelector((state) => state.user.user);

  const navigate = useNavigate();
  const { userId } = useParams();
  const dispatch = useDispatch();

  const [openPopup, setOpenPopup] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setSpinner(true);
        const { data: userData } = await getUser(userId);
        const { data: categorysData } = await getAllCategorys();

        dispatch(categorys(categorysData));
        dispatch(userInfo(userData));

        setSpinner(false);
      } catch (err) {
        toast.error("متاسفانه مشکلی پیش آمد.");
        console.log(err.message);
        navigate("/users");
        setSpinner(false);
      }
    };
    fetchData();
  }, []);

  const createAwnsers = async (values) => {
    try {
      setSpinner(true);
      const { status } = await createUserAwnser(pointCalculate(values, user));
      setSpinner(false);
      if (status === 201) {
        setOpenPopup(true);
        toast.success("پاسخ شما باموفقیت ثبت گردید.");
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
        <title>اپلیکیشن بهترین دوست من کیه؟ | حدس پاسخ</title>
      </Helmet>
      {!spinner ? (
        <div className="relative">
          <Formik
            initialValues={{
              username: "",
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
            validationSchema={awnsersSchema}
            onSubmit={(values) => {
              createAwnsers(values);
            }}
          >
            <Form className="flex space-y-10 flex-col mx-10 my-16">
              <div className="flex justify-center items-center gap-4 text-lg text-slate-200">
                <img
                  src={user.avatar}
                  alt=""
                  className="max-sm:w-10 w-14 rounded-full"
                />
                <h2 className="max-sm:text-base">
                  {user.username} رو چقدر می شناسی؟
                </h2>
              </div>
              <div className="flex justify-center items-center gap-4 text-lg text-slate-200">
                <FcBusinessman fontSize="30" />
                <Field
                  name="username"
                  type="text"
                  placeholder="نام و نام خانوادگی را وارد کنید."
                  className="text-slate-400 border border-slate-600 bg-slate-800 appearance-none rounded-full py-2 px-4 w-60 outline-none text-sm"
                />
                <ErrorMessage name="username">
                  {(msg) => <p className="text-red-500">{msg}</p>}
                </ErrorMessage>
              </div>

              <QuestionsItems user={user} />

              <div className="flex justify-center gap-5">
                <input
                  type="submit"
                  value="ثبت"
                  className=" bg-sky-500 hover:bg-sky-700 cursor-pointer text-slate-50 py-2 px-8 rounded-full "
                />

                <Link
                  to={`/users/${userId}`}
                  className=" bg-sky-500 hover:bg-sky-700 text-slate-50 py-2 px-5 rounded-full "
                >
                  بازگشت
                </Link>
              </div>
            </Form>
          </Formik>
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center flex-col">
          <img src={spinnerGif} alt="" className="w-1/12" />
          <p className="text-sky-400">منتظر بمانید ..</p>
        </div>
      )}

      {/* show corrent awnsers popup */}
      {openPopup ? <ShowCorrectAwnsers user={user} /> : null}
    </>
  );
};
