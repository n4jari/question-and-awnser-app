import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

//IMPORT all components
import { Home } from "./Components/Home";
import { CreateQBox } from "./Components/questions/CreateQBox";
import { ViewUser } from "./Components/ViewUser";
import { AwnserToQBox } from "./Components/awnsers/AwnserToQBox";
import { Users } from "./Components/Users";
import { useState } from "react";
import { contextApp } from "./Contexts/contextApp";
import { HelmetProvider } from "react-helmet-async";
import { NotFoundPage } from "./Components/NotFoundPage";

export const App = () => {
  const [spinner, setSpinner] = useState(false);

  return (
    <HelmetProvider>
      <contextApp.Provider value={{ spinner, setSpinner }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createqb" element={<CreateQBox />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userId" element={<ViewUser />} />
          <Route
            path="/users/awnser-to-qbox/:userId"
            element={<AwnserToQBox />}
          />
          <Route
            path="*"
            element={<NotFoundPage>صفحه مورد نظر یافت نشد</NotFoundPage>}
          />
        </Routes>
        <Toaster position="top-right" />
      </contextApp.Provider>
    </HelmetProvider>
  );
};
