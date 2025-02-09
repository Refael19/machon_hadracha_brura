import { useAtom } from "jotai";
import { lessonsDisplayAtom } from "../context/atoms";
import { useEffect, useState } from "react";
import { Lesson } from "../context/types";
import { getLessonsLocalStorage } from "../functions/getLessonsLocalStorage";

const Search = () => {
  const lessons: Lesson[] = getLessonsLocalStorage();
  const [, setLessonsDisplay] = useAtom(lessonsDisplayAtom);
  const [selectValue, setSelectValue] = useState<string>("searchLesson");
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    setLessonsDisplay(
      lessons.filter((lesson) => {
        if (selectValue === "searchLesson") {
          return lesson.name.includes(inputValue);
        } else return lesson.title.includes(inputValue);
      })
    );
  }, [selectValue, inputValue]);

  return (
    <div className="flex justify-center">
      <select
        name="search"
        id="search"
        onChange={(e) => {
          setSelectValue(e.target.value);
        }}
        className="bg-my-topic rounded-r-2xl p-1 pr-2"
      >
        <option value="searchLesson">חפש שיעור</option>
        <option value="searchTitle">חפש נושא</option>
      </select>
      <input
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        className="w-[50%] rounded-l-xl px-1"
      />
    </div>
  );
};

export default Search;
