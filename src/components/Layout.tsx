import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

const Layout = () => {

  return (
    <div>
      <div className="grid grid-rows-[30px_1fr_100px] h-screen">
        <Header />
        <div className={`flex`}>
          <Nav />
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
