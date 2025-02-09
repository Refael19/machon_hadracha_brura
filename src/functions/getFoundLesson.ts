import { Lesson, LessonBasic } from "../context/types";
import { getLessonsLocalStorage } from "./getLessonsLocalStorage";

const lessons = getLessonsLocalStorage();

export const getFoundLesson = (
  lesson:LessonBasic
): Lesson | undefined => {
  return lessons.find((l) => {
    return l.title === lesson.title && l.name === lesson.name;
  });
};
