import { useAtom } from "jotai";
import { lessonsDisplayAtom } from "../context/atoms";
import { useState } from "react";
import lessonsJson from "../JSON/lessons.json";

const Search = () => {
  const [, setLessonsDisplayAtom] = useAtom(lessonsDisplayAtom);
  const [selectValue, setSelectValue] = useState<string>("searchLesson");
  const [inputValue, setInputValue] = useState<string>("");

  const resultSearch = () => {
    setLessonsDisplayAtom(
      lessonsJson.filter((lesson) => {
        if (selectValue === "searchLesson") {
          return lesson.lessonName.includes(inputValue);
        } else return lesson.lessonTitle.includes(inputValue);
      })
    );
  };

  return (
    <div className="flex">
      <select
        name="search"
        id="search"
        onChange={(e) => {
          setSelectValue(e.target.value);
        }}
        className="bg-blue-200 rounded-r-2xl pr-2"
      >
        <option value="searchLesson">חפש שיעור</option>
        <option value="searchTitle">חפש נושא</option>
      </select>
      <input
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        className="bg-blue-100 w-[50%]"
      />
      <button
        onClick={resultSearch}
        className="bg-blue-200 rounded-l-2xl p-1 px-2"
      >
        חפש
      </button>
    </div>
  );
};

export default Search;
