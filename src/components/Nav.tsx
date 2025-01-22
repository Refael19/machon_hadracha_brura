import { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  // statics
  const [isMenuOpen,setIsMenuOpen] = useState(true);

  // functions
  const toogleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className={`relative bg-blue-300 ${isMenuOpen? "w-[30%]":"w-[0%]"}`}>
      <button
        onClick={toogleMenu}
        className={`absolute w-[30px] ${isMenuOpen? "m-[100%]":"m-[0%]"} mt-0`}
      >
        <img src="src\assets\icons\icons8-menu-48.png" alt="" />
      </button>
      <div className={`flex flex-col mx-5 text-center ${isMenuOpen? "":"hidden"}`}>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          דף הבית
        </NavLink>
        <NavLink
          to={"/lessons"}
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          שיעורים
        </NavLink>
        <NavLink
          to={"/articles"}
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          מאמרים
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
