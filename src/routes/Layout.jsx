import { Outlet } from "react-router-dom";
import MainHeader from "../component/Mainheader";

const Header = (props) => {
  return (
    <>
      <MainHeader />
      <Outlet/>
    </>
  );
};

export default Header;
