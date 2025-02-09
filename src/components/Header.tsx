import { useAtom } from "jotai";
import { isMenuOpenAtom } from "../context/atoms";
import Login from "../pages/login/Login";

const Header = () => {
    const [isMenuOpen] = useAtom(isMenuOpenAtom);
  
  return (
    <div className="flex bg-my-header">
      <Login />
      <header className={`text-center my-auto ${isMenuOpen?"w-[70%]":"w-[100%]"}`} >
        header
      </header>
    </div>
  );
};

export default Header;
