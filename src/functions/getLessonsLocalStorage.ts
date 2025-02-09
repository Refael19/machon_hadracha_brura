import { Lesson } from "../context/types";

export const getLessonsLocalStorage = (): Lesson[] => {
  const lessons = localStorage.getItem("lessons");
  return lessons ? JSON.parse(lessons) : [];
};