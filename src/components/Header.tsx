import { useAtom } from "jotai";
import { isMenuOpenAtom } from "../context/atoms";
import Login from "../pages/login/Login";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen] = useAtom(isMenuOpenAtom);
  const [DisplayComponentName, setDisplayComponentName] =
    useState<string>("");
  const location = useLocation();

  useEffect(() => {
    setDisplayComponentName(() => {
      const locationName: string =
        location.pathname.split("/").filter(Boolean).pop() || "Home";

      switch (locationName) {
        case "Home":
          return "דף הבית";
        case "lessons":
          return "שיעורים";
        case "management":
          return "ניהול";
        default:
          return "מכון הדרכה ברורה";
      }
    });
  }, [location.pathname]);

  return (
    <div className="flex bg-my-header">
      <Login />
      <header
        className={`text-center my-auto ${isMenuOpen ? "w-[70%]" : "w-[100%]"}`}
      >
        {DisplayComponentName}
      </header>
    </div>
  );
};

export default Header;
