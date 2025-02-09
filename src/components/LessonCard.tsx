import { useAtom } from "jotai";
import { isDetailLessonsHiddenAtom } from "../context/atoms";
import { Lesson } from "../context/types";

const LessonCard = ({ lesson }: { lesson: Lesson }) => {
  const [isDetailLessonsHidden] = useAtom(isDetailLessonsHiddenAtom);

  return (
    <div
      key={lesson.id}
      style={{ padding: isDetailLessonsHidden ? "10px" : "0px" }}
      className="bg-my-topic rounded-2xl max-w-[90%]"
    >
      <iframe
        width="100%"
        className="rounded-xl"
        src={`https://www.youtube.com/embed/SiSCyTnZ0Vc`}
        title="הרב אלחנן כלאף - המילון והשפה הגברית והנשית - 98 הדרכה ברורה"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>{" "}
      <div style={{ display: isDetailLessonsHidden ? "" : "none" }}>
        <h2>
          <span className="font-bold">שם: </span>
          {lesson.name}
        </h2>
        <h3>
          <span className="font-bold">נושא: </span>
          {lesson.title}
        </h3>
      </div>
    </div>
  );
};

export default LessonCard;
