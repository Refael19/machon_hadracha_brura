import { useAtom } from "jotai";
import { displayManagementAtom } from "../../../context/atoms";

const MenuManagement = () => {
  const [, setDisplayManagement] = useAtom(
    displayManagementAtom
  );
  return (
    <div className="bg-my-header rounded-2xl p-3 flex flex-col gap-2">
      <h2>שיעורים</h2>
      <button
        onClick={() => setDisplayManagement("addLesson")}
        className="bg-my-topic rounded-2xl p-2"
      >
        הוסף שיעור
      </button>
      <button
        onClick={() => setDisplayManagement("editLesson")}
        className="bg-my-topic rounded-2xl p-2"
      >
        ערוך שיעור
      </button>
      <button
        onClick={() => setDisplayManagement("deleteLesson")}
        className="bg-my-topic rounded-2xl p-2"
      >
        מחק שיעור
      </button>
    </div>
  );
};

export default MenuManagement;
