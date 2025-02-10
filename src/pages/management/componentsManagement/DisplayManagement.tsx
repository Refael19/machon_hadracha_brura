import { useAtom } from "jotai";
import { displayManagementAtom } from "../../../context/atoms";
import MenuManagement from "./MenuManagement";
import AddLesson from "./lessonManagement/AddLesson";
import EditLesson from "./lessonManagement/EditLesson";
import DeleteLesson from "./lessonManagement/DeleteLesson";

const DisplayManagement = () => {
      const [displayManagement] = useAtom(
        displayManagementAtom
      );

      const displayComponent = () => {
        switch (displayManagement) {
          case "menuManagement":
            return <MenuManagement />;
          case "addLesson":
            return <AddLesson />;
          case "editLesson":
            return <EditLesson />;
          case "deleteLesson":
            return <DeleteLesson />;
          default:
            return <MenuManagement/>;
        }
      };
  return (
    <div className="w-[250px] text-center">
      {displayComponent()}
    </div>
  )
}

export default DisplayManagement
