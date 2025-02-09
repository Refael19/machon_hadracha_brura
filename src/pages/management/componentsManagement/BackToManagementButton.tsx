import { useAtom } from "jotai";
import { displayManagementAtom } from "../../../context/atoms";

const BackToManagementButton = () => {
  const [, setDisplayManagement] = useAtom(displayManagementAtom);

  return (
    <button
      onClick={() => setDisplayManagement(() => "menuManagement")}
      className="bg-my-topic rounded-2xl p-1 px-2"
    >
      חזרה לניהול
    </button>
  );
};

export default BackToManagementButton;
