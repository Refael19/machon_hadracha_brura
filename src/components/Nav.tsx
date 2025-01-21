import { useAtom } from "jotai";
import { NavLink } from "react-router-dom";
import { navStatic } from "../atoms/atoms";

const Nav = () => {
  // atoms
  const [navAtom, setNavAtom] = useAtom(navStatic);

  // functions
  const menuButton = () => {
    setNavAtom((prevNav) => ({
      display: prevNav.display === "hidden" ? "" : "hidden",
      width: prevNav.width === "0%" ? "30%" : "0%",
    }));
  };

  return (
    <nav className="relative bg-blue-300">
      <button
        onClick={menuButton}
        className={`absolute w-[30px] m-[100%] mt-0`}
      >
        <img src="src\assets\icons\icons8-menu-48.png" alt="" />
      </button>
      <div className={`flex flex-col p-1 text-center ${navAtom.display}`}>
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
