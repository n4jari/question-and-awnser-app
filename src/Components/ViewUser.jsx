import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useContext } from "react";
import { contextApp } from "../Contexts/contextApp";

//IMPORT all file
import spinnerGIF from "../Assets/img/spinner.gif";

//IMPORT API
import { getAllUsersAwnsers, getUser } from "../Services/AppService";

//IMPORT ACTIONS
import {
  filteredUsersAwnsers,
  usersAwnsers,
} from "../Features/awnsers/usersAwnsersSlice";
import { userInfo } from "../Features/user/userSlice";
import { Helmet } from "react-helmet-async";
import { NotFoundPage } from "./NotFoundPage";

export const ViewUser = () => {
  const { spinner, setSpinner } = useContext(contextApp);
  let userIndex = 1;

  const filteredAwnsers = useSelector(
    (state) => state.usersAwnsers.filteredAwnsers
  );
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const { userId } = useParams();
  const dispatch = useDispatch();

  //GET all Awnsert after render
  useEffect(() => {
    const fetchData = async () => {
      try {
        setSpinner(true);
        const { data: userData } = await getUser(userId);
        const { data: usersAwnsersData } = await getAllUsersAwnsers();

        dispatch(userInfo(userData));
        dispatch(usersAwnsers(usersAwnsersData));
        dispatch(filteredUsersAwnsers(userData));
        setSpinner(false);
      } catch (err) {
        setSpinner(false);
        toast.error("متاسفانه مشکلی پیش آمد.");
        navigate("/users");
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Helmet>
        <title>اپلیکیشن بهترین دوست من کیه؟ | دیدن نتایج</title>
      </Helmet>
      {!spinner ? (
        <div className="flex max-sm:space-y-6 space-y-8 flex-col max-sm:mx-6 mx-10 max-sm:my-10 my-16">
          <div className="flex items-center gap-4 justify-end text-sky-400 font-semibold">
            <i>{user.username}</i>
            <img
              src={user.avatar}
              alt=""
              className="max-sm:w-10 w-14 rounded-full"
            />
          </div>
          <div className="flex justify-center items-center gap-3">
            <Link
              to={`/users/awnser-to-qbox/${userId}`}
              className="max-sm:text-sm bg-sky-500 hover:bg-sky-700 cursor-pointer text-slate-50  py-2 px-8 rounded-full "
            >
              شروع
            </Link>

            <Link
              to="/users"
              className="max-sm:text-sm bg-sky-500 hover:bg-sky-700 text-slate-50 py-2 px-5 rounded-full "
            >
              بازگشت
            </Link>
          </div>

          <div className="flex justify-center">
            <table className="max-sm:text-sm w-4/5 max-sm:w-full text-center table-auto">
              <thead className=" bg-slate-900 text-slate-300 ">
                <tr>
                  <th className="p-3">ترتیب</th>
                  <th>نام شرکت کننده</th>
                  <th>درصد پاسخ صحیح</th>
                </tr>
              </thead>
              {filteredAwnsers.map((item) => (
                <tbody
                  key={item.id}
                  className="even:bg-slate-700 odd:bg-slate-600 text-slate-400 "
                >
                  <tr>
                    <td className="p-3">{userIndex++}</td>
                    <td>{item.username}</td>
                    <td>{item.points} %</td>
                  </tr>
                </tbody>
              ))}
            </table>
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
