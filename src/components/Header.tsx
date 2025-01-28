import { useAtom } from "jotai";
import Login from "../pages/Login";
import { isMenuOpenAtom } from "../context/atoms";

const Header = () => {
    const [isMenuOpen] = useAtom(isMenuOpenAtom);
  
  return (
    <div className="flex">
      <Login />
      <header className={`bg-green-300 text-center ${isMenuOpen?"w-[70%]":"w-[100%]"}`} >
        header
      </header>
    </div>
  );
};

export default Header;
