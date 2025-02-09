import { useAtom } from "jotai";
import { Lesson } from "../context/types";
import { lessonsDisplayAtom } from "../context/atoms";
import { getLessonsLocalStorage } from "../functions/getLessonsLocalStorage";
import { useEffect, useState } from "react";

const SelectLessonsTitle = () => {
  const lessons: Lesson[] = getLessonsLocalStorage();
  const [selectTitleValue, setSelectTitleValue] = useState("allLessons");
  const [, setLessonsDisplay] = useAtom<Lesson[]>(lessonsDisplayAtom);

  const lessonsTitles: string[] = [];
  for (const lesson of lessons) {
    if (!lessonsTitles.includes(lesson.title)) {
      lessonsTitles.push(lesson.title);
    }
  }

  const filterByTitle = () => {
    if (selectTitleValue === "allLessons") return lessons;
    return lessons.filter((lesson) => {
      return selectTitleValue === lesson.title;
    });
  };

  useEffect(() => {
    setLessonsDisplay(filterByTitle());
  }, [selectTitleValue]);

  return (
    <div className="flex gap-2 justify-center">
      <select
        name="lessonsTitle"
        id="lessonsTitle"
        onChange={(e) => {
          setSelectTitleValue(e.target.value);
        }}
        className="bg-my-topic rounded-2xl p-1 px-2"
      >
        <option value="allLessons">כל הנושאים</option>
        {lessonsTitles.map((title: string) => (
          <option key={title} value={title}>
            {title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectLessonsTitle;
