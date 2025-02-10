import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";


const Layout = () => {

  return (
    <div>
      <div className="grid grid-rows-[50px_1fr_100px] h-screen">
        <Header />
        <div className="flex">
          <Nav />
          <div className="py-[20px] px-[40px] h-full w-full bg-my-body">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
