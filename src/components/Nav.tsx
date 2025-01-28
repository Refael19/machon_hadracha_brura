import { useAtom } from "jotai";
import { NavLink } from "react-router-dom";
import { isMenuOpenAtom } from "../context/atoms";

const Nav = () => {
  const [isMenuOpen,setIsMenuOpen] = useAtom(isMenuOpenAtom);

  return (
    <nav className={`relative bg-blue-300`} style={{width: isMenuOpen? "30%":"0%"}}>
      <button
        onClick={()=>{setIsMenuOpen((prev) => !prev)}}
        className={`absolute w-[30px] mt-0`}
        style={{marginRight:isMenuOpen? "100%":"0%"}}
      >
        <img src="src\assets\icons\icons8-menu-48.png" alt="" />
      </button>
      <div className={`flex flex-col mx-5 text-center`} style={{display:isMenuOpen? "":"none"}}>
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
        <NavLink
          to={"/management"}
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          ניהול
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
