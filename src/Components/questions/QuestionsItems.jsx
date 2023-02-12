import { ErrorMessage, Field } from "formik";
import { useSelector } from "react-redux";
import { MdError } from "react-icons/md";

export const QuestionsItems = () => {
  const category = useSelector((state) => state.categorys.categorys);

  const cName1 =
    "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5";
  const cName2 = "grid grid-cols-2 max-sm:grid-cols-1 ";

  let questionsList = [
    {
      item: category.q1,
      name: "q1",
      title: "غذای مورد علاقه م؟",
      gridClassName: cName1,
    },
    {
      item: category.q2,
      name: "q2",
      title: "کدوم رنگ و بیشتر از همه دوست دارم؟",
      gridClassName: cName1,
    },
    {
      item: category.q3,
      name: "q3",
      title: "کدوم شهر و برای مسافرت انتخاب میکنم؟",
      gridClassName: cName1,
    },
    {
      item: category.q4,
      name: "q4",
      title: "کدوم کشور و برای سفر انتخاب میکنم؟",
      gridClassName: cName1,
    },
    {
      item: category.q5,
      name: "q5",
      title: "حیوان مورد علاقه م؟",
      gridClassName: cName1,
    },
    {
      item: category.q6,
      name: "q6",
      title: "ماشین مورد علاقه م؟",
      gridClassName: cName1,
    },
    {
      item: category.q7,
      name: "q7",
      title: "ابر قهرمان محبوبم؟",
      gridClassName: cName1,
    },
    {
      item: category.q8,
      name: "q8",
      title: "پیتزای مورد علاقه م؟",
      gridClassName: cName1,
    },
    {
      item: category.q9,
      name: "q9",
      title: "ساز مورد علاقه م؟",
      gridClassName: cName1,
    },
    {
      item: category.q10,
      name: "q10",
      title: "قلیون چه طعمی میکشم؟",
      gridClassName: cName1,
    },
    {
      item: category.q11,
      name: "q11",
      title: "کدوم و ترجیح میدم؟",
      gridClassName: cName2,
    },
    {
      item: category.q12,
      name: "q12",
      title: "کدوم و ترجیح میدم؟",
      gridClassName: cName2,
    },
    {
      item: category.q13,
      name: "q13",
      title: "کدوم و ترجیح میدم؟",
      gridClassName: cName2,
    },
    {
      item: category.q14,
      name: "q14",
      title: "کدوم و ترجیح میدم؟",
      gridClassName: cName2,
    },
    {
      item: category.q15,
      name: "q15",
      title: "کدوم و ترجیح میدم؟",
      gridClassName: cName2,
    },
    {
      item: category.q16,
      name: "q16",
      title: "ترجیح میدم ..... به زمین حمله کنن.",
      gridClassName: cName2,
    },
    {
      item: category.q17,
      name: "q17",
      title: "ترجیح میدم به ..... سفر کنم.",
      gridClassName: cName2,
    },
    {
      item: category.q18,
      name: "q18",
      title: "ترجیح میدم .....",
      gridClassName: cName2,
    },
    {
      item: category.q19,
      name: "q19",
      title: "ترجیح میدم ..... ازدواج کنم.",
      gridClassName: cName2,
    },
    {
      item: category.q20,
      name: "q20",
      title: "کدوم و ترجیح میدم؟",
      gridClassName: cName2,
    },
    {
      item: category.q21,
      name: "q21",
      title: "کدوم روز در هفته رو بیشتر دوست دارم؟",
      gridClassName: cName1,
    },
    {
      item: category.q22,
      name: "q22",
      title: "بوی مورد علاقه م؟",
      gridClassName: cName1,
    },
    {
      item: category.q23,
      name: "q23",
      title: "معمولا صبحانه چی می خورم؟",
      gridClassName: cName1,
    },
    {
      item: category.q24,
      name: "q24",
      title: "فصل مورد علاقه م؟",
      gridClassName: cName1,
    },
    {
      item: category.q25,
      name: "q25",
      title: "فوبیای چی دارم؟",
      gridClassName: cName1,
    },
  ];
  return (
    <>
      {questionsList.map((question, index) => (
        <div
          key={index}
          className="flex flex-col items-center border border-sky-400 max-sm:py-8 md:py-10 py-12 rounded-2xl lg:rounded-full bg-slate-900 shadow-xl"
        >
          <ErrorMessage name={question.name}>
            {(msg) => (
              <div className="text-red-500 sm:text-sm flex items-center gap-2 ">
                <MdError /> {msg}
              </div>
            )}
          </ErrorMessage>
          <div>
            <h2 className="max-sm:text-sm lg:text-base text-slate-300">
              {question.title}
            </h2>
          </div>
          <div
            className={`${question.gridClassName} xl:flex gap-y-8 mt-8 gap-x-10 md:gap-x-10 lg:gap-x-4 text-sky-500 list-none`}
          >
            {question.item &&
              question.item.map((item, index) => (
                <div
                  className="sm:space-x-2 md:space-x-4 lg:space-x-8"
                  key={index}
                >
                  <Field
                    name={question.name}
                    type="radio"
                    value={item || ""}
                    className=" ml-2"
                  />
                  <label className="max-sm:text-sm lg:text-base" htmlFor={item}>
                    {item}
                  </label>
                </div>
              ))}
          </div>
        </div>
      ))}
    </>
  );
};
