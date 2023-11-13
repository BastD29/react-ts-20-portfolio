import { Route, Routes } from "react-router-dom";
import {
  ABOUT,
  AUTH,
  CONTACT,
  HOME,
  LOGIN,
  REGISTER,
  ROOT,
} from "../constants/routes";

import Login from "./features/Login/Login";
import Register from "./features/Register/Register";
import Home from "./features/Home/Home";
import About from "./features/About/About";
import Contact from "./features/Contact/Contact";
import { AuthLayout } from "./layouts/AuthLayout/AuthLayout";
import { DashboardLayout } from "./layouts/DashboardLayout/DashboardLayout";
import { PageLayout } from "./layouts/PageLayout/PageLayout";

const App = () => {
  return (
    <Routes>
      <Route path={AUTH} element={<AuthLayout />}>
        <Route path={LOGIN} element={<Login />} />
        <Route path={REGISTER} element={<Register />} />
      </Route>

      <Route path={ROOT} element={<DashboardLayout />}>
        <Route element={<PageLayout />}>
          <Route path={HOME} element={<Home />} />
        </Route>
        <Route element={<PageLayout />}>
          <Route path={ABOUT} element={<About />} />
        </Route>
        <Route element={<PageLayout />}>
          <Route path={CONTACT} element={<Contact />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
