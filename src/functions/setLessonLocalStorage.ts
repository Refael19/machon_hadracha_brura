import { Lesson } from "../context/types";
import { getLessonsLocalStorage } from "./getLessonsLocalStorage";

export const setAddLessonLocalStorage = (lesson: Lesson): void => {
  const lessons: Lesson[] = getLessonsLocalStorage();
  // https://www.youtube.com/watch?v=SiSCyTnZ0Vc  console.log(lesson.src);
  // https://www.youtube.com/watch?v=SiSCyTnZ0Vc
  lessons.push(lesson);
  localStorage.setItem("lessons", JSON.stringify(lessons));
  alert(`השיעור ${lesson.name} נוסף בהצלחה!`);
};

export const setEditLessonLocalStorage = (lesson: Lesson): void => {
  let lessons: Lesson[] = getLessonsLocalStorage();
  lessons = lessons.map((l: Lesson) => {
    if (l.id === lesson.id) {
      console.log(l);
      return { ...l, ...lesson };
    } else return l;
  });
  localStorage.setItem("lessons", JSON.stringify(lessons));
  alert(`השיעור ${lesson.name} נערך בהצלחה! , רענן לעדכון הנתונים.`);
};

export const setDeleteLessonLocalStorage = (lesson: Lesson): void => {
  const isOkToDelete: boolean = confirm(
    `האם אתה בטוח שברצונך למחוק את השיעור ${lesson.name} שנמצא בנושא ${lesson.title} ?`
  );
  if (isOkToDelete) {
    let lessons: Lesson[] = getLessonsLocalStorage();
    lessons = lessons.filter((l) => l.id !== lesson.id);
    localStorage.setItem("lessons", JSON.stringify(lessons));
    alert(`השיעור ${lesson.name} נמחק בהצלחה! , רענן לעדכון הנתונים.`);
  } else alert(`השיעור ${lesson.name} שנמצא בנושא ${lesson.title} לא נמחק.`);
};
