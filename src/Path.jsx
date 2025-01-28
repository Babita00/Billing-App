import { Outlet } from "react-router-dom";
import HeaderPage from "./components/HeaderPage/HeaderPage";
const Path = () => {
  return (
    <>
      <HeaderPage />
      <Outlet />
    </>
  );
};

export default Path;
