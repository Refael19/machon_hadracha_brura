import { useForm } from "react-hook-form";
import BackToManagementButton from "../BackToManagementButton";
import { Lesson, LessonForm } from "../../../../context/types";
import { v4 as uniqueID } from "uuid";
import { setAddLessonLocalStorage } from "../../../../functions/setLessonLocalStorage";
import { getLessonsLocalStorage } from "../../../../functions/getLessonsLocalStorage";

const AddLesson = () => {
  const lessons = getLessonsLocalStorage();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LessonForm>();

  const isUniqueNameLessons = (newLessonName: string): boolean => {
    return !lessons.some((lesson) => lesson.name === newLessonName);
  };

  function extractYouTubeID(url: string) {
    const regex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }
  const onSubmit = (lesson: LessonForm): void => {
    let inputSrc: string | null = extractYouTubeID(lesson.src);
    let src: string = `https://www.youtube.com/embed/${inputSrc}`;
    const newLesson: Lesson = {
      title: lesson.title,
      name: lesson.name,
      src: src,
      summary: lesson.summary,
      sources: lesson.sources,
      id: uniqueID(),
    };
    if (inputSrc) {
      if (isUniqueNameLessons(newLesson.name)) {
        setAddLessonLocalStorage(newLesson);
        reset();
      } else
        alert(
          "קיים שיעור עם אותו שם ולכן השיעור לא נוסף בהצלחה, החלף את שם השיעור ונסה שוב."
        );
    }else alert("הקישור לא תקין, החלף בקישור תקין ונסה שוב.")
  };

  return (
    <div className="bg-my-header rounded-2xl p-3 flex flex-col gap-2">
      <BackToManagementButton />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <div className="flex flex-col">
          <label htmlFor="title">נושא השיעור:</label>
          <input
            type="text"
            id="title"
            placeholder="כתוב את נושא השיעור."
            {...register("title", { required: "חייב לכתוב את נושא השיעור" })}
          />
          <p>{errors.title?.message}</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="name">שם השיעור:</label>
          <input
            type="text"
            id="name"
            placeholder="כתוב את שם השיעור."
            {...register("name", { required: "חייב לכתוב את שם השיעור" })}
          />
          <p>{errors.name?.message}</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="src">קישור לשיעור:</label>
          <input
            type="text"
            id="src"
            placeholder="כתוב את קישור השיעור."
            {...register("src", { required: "חייב לכתוב את קישור השיעור" })}
          />
          <p>{errors.src?.message}</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="summary">תקציר לשיעור: (רשות)</label>
          <input
            type="text"
            id="summary"
            placeholder="כתוב את תקציר השיעור."
            {...register("summary")}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="sources">מקורות לשיעור: (רשות)</label>
          <input
            type="text"
            id="sources"
            placeholder="כתוב את מקורות השיעור."
            {...register("sources")}
          />
        </div>

        <button type="submit" className="bg-my-topic p-2 rounded-3xl">
          הוסף שיעור
        </button>
      </form>
    </div>
  );
};

export default AddLesson;
