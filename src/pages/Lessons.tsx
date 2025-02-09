import SelectLessonsTitle from "../components/SelectLessonsTitle";
import Search from "../components/Search";
import { useAtom } from "jotai";
import {
  isDetailLessonsHiddenAtom,
  lessonsDisplayAtom,
} from "../context/atoms";
import { Lesson } from "../context/types";
import LessonCard from "../components/LessonCard";

const Lessons = () => {
  const [isDetailLessonsHidden, setIsDetailLessonsHidden] = useAtom(
    isDetailLessonsHiddenAtom
  );
  const [lessonsDisplay] = useAtom(lessonsDisplayAtom);
  const detailsLessonsButton = (): void => {
    setIsDetailLessonsHidden((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-3">
      <SelectLessonsTitle />
      <Search />
      <div className="flex max-h-fit justify-center">
        <button
          onClick={detailsLessonsButton}
          className="bg-my-topic p-2 rounded-3xl"
        >
          {isDetailLessonsHidden
            ? "הסתר את פרטי השיעורים"
            : "הצג את פרטי השיעורים"}
        </button>
      </div>
      <div className="rounded-2xl p-2 flex gap-2 m-3 justify-center flex-wrap">
        {lessonsDisplay.map((lesson: Lesson) => (
          <LessonCard lesson={lesson} />
        ))}
      </div>
    </div>
  );
};

export default Lessons;
