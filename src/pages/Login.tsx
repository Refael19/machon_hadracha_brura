import { useAtom } from "jotai";
import { isMenuOpenAtom } from "../context/atoms";

const Login = () => {
  const [isMenuOpen] = useAtom(isMenuOpenAtom);

  return (
    <div className={`bg-green-300 flex justify-center items-center ${isMenuOpen ? "w-[30%]" : "hidden"}`}>
      <div className="flex">
        <button className="bg-orange-200 p-1 px-2 rounded-r-2xl">התחבר</button>
        <div className="bg-orange-100 p-1 px-2 rounded-l-2xl">אורח</div>
      </div>
    </div>
  );
};

export default Login;
