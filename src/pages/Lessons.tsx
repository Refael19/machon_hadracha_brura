import { useState } from "react";
import SelectLessonsTitle from "../components/SelectLessonsTitle";
import Search from "../components/Search";
import { useAtom } from "jotai";
import { lessonsDisplayAtom } from "../context/atoms";
import { Lesson } from "../context/types";

const Lessons = () => {
  const [isDetailLessonsHidden, setIsDetailLessonsHidden] = useState(true);
  const [lessonsDisplay] = useAtom(lessonsDisplayAtom);
  const detailsLessonsButton = (): void => {
    setIsDetailLessonsHidden((prev) => !prev);
  };

  return (
    <>
      <SelectLessonsTitle />
      <Search />
      <div className="flex max-h-fit">
        <button
          onClick={detailsLessonsButton}
          className="bg-blue-300 p-2 rounded-3xl"
        >
          {isDetailLessonsHidden
            ? "הסתר את פרטי השיעורים"
            : "הצג את פרטי השיעורים"}
        </button>
      </div>
      <div className="bg-blue-200 rounded-2xl p-2 flex flex-col gap-2">
        {lessonsDisplay.map((lesson: Lesson) => (
          <div
            key={lesson.lessonID}
            style={{ padding: isDetailLessonsHidden ? "5px" : "0px" }}
            className="bg-blue-300 rounded-2xl"
          >
            <iframe
              src={lesson.lessonSrc}
              className="w-[100%] rounded-2xl"
            ></iframe>
            <div style={{ display: isDetailLessonsHidden ? "" : "none" }}>
              <h2>
                <span className="font-bold">שם: </span>
                {lesson.lessonName}
              </h2>
              <h3>
                <span className="font-bold">נושא: </span>
                {lesson.lessonTitle}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Lessons;
