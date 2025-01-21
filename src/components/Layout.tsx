import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import { useAtom } from "jotai";
import { navStatic } from "../atoms/atoms";

const Layout = () => {
  const [navAtom] = useAtom(navStatic);

  return (
    <div>
      <div className="grid grid-rows-[30px_1fr_100px] h-screen">
        <Header />
        <div className={`grid grid-cols-[${navAtom.width}_1fr]`}>
          <Nav />
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
