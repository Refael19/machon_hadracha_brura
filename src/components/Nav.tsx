import { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  // statics
  const [navStatic,setNavStatic] = useState({
    display: "",
    width: '30%',
    marginMenu: '100%'
  });

  // functions
  const menuButton = () => {
    setNavStatic((prevNav) => ({
      display: prevNav.display === "hidden" ? "" : "hidden",
      width: prevNav.width === "0%" ? "30%" : "0%",
      marginMenu: prevNav.marginMenu === "0%" ? "100%" : "0%"
    }));
  };

  return (
    <nav className={`relative bg-blue-300 w-[${navStatic.width}]`}>
      <button
        onClick={menuButton}
        className={`absolute w-[30px] m-[${navStatic.marginMenu}] mt-0`}
      >
        <img src="src\assets\icons\icons8-menu-48.png" alt="" />
      </button>
      <div className={`flex flex-col mx-5 text-center ${navStatic.display}`}>
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
