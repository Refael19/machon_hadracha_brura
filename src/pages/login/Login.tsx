import { useAtom } from "jotai";
import { isMenuOpenAtom } from "../../context/atoms";

const Login = () => {
  const [isMenuOpen] = useAtom(isMenuOpenAtom);

  return (
    <div className={`flex justify-center items-center ${isMenuOpen ? "w-[30%]" : "hidden"}`}>
      <div className="flex">
        <button className="bg-topic p-1 px-2 rounded-r-2xl">התחבר</button>
        <div className="bg-topic p-1 px-2 rounded-l-2xl">אורח</div>
      </div>
    </div>
  );
};

export default Login;
