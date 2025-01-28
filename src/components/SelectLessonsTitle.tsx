import { useAtom } from "jotai";
import lessonsJson from "../JSON/lessons.json";
import { Lesson } from "../context/types";
import { lessonsDisplayAtom } from "../context/atoms";
import { useRef } from "react";

const SelectLessonsTitle = () => {
  const lessons: Lesson[] = lessonsJson;
  const SelectTitleValue = useRef<string>("allLessons");
  const [, setLessonsDisplayAtom] = useAtom<Lesson[]>(lessonsDisplayAtom);

  const lessonsTitles: string[] = [];
  for (let lesson of lessons) {
    if (!lessonsTitles.includes(lesson.lessonTitle)) {
      lessonsTitles.push(lesson.lessonTitle);
    }
  }

  const filterByTitle = () => {
    if (SelectTitleValue.current === "allLessons") return lessons;
    return lessons.filter((lesson) => {
      return SelectTitleValue.current === lesson.lessonTitle;
    });
  };
  return (
    <div>
      <select
        name="lessonsTitle"
        id="lessonsTitle"
        onChange={(e) => {
          SelectTitleValue.current = e.target.value;
          setLessonsDisplayAtom(filterByTitle());
        }}
        className="bg-blue-200 rounded-2xl p-1 px-2"
      >
        <option value="allLessons">כל הנושאים</option>
        {lessonsTitles.map((title: string) => (
          <option key={title} value={title}>
            {title}
          </option>
        ))}
      </select>
      <button
        onClick={() => {
          setLessonsDisplayAtom(filterByTitle());
        }}
        className="bg-blue-200 rounded-2xl p-1 px-2"
      >
        הצג
      </button>
    </div>
  );
};

export default SelectLessonsTitle;
