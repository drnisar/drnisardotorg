import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div id="main" className="container-fluid">
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
