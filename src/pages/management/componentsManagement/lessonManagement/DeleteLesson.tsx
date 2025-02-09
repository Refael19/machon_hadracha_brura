import { useForm } from "react-hook-form";
import BackToManagementButton from "../BackToManagementButton";
import { Lesson, LessonBasic } from "../../../../context/types";
import { getFoundLesson } from "../../../../functions/getFoundLesson";
import { setDeleteLessonLocalStorage } from "../../../../functions/setLessonLocalStorage";

const DeleteLesson = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LessonBasic>();

  const onSubmit = (lesson: LessonBasic) => {
    const theFoundLesson: Lesson | undefined = getFoundLesson(lesson);
    if (theFoundLesson) {
      setDeleteLessonLocalStorage(theFoundLesson);
      reset();
    } else alert(`השיעור ${lesson.name} בנושא ${lesson.title} לא נמצא , נסה שוב.`);
  };

  return (
    <div className="bg-my-header rounded-2xl p-3 flex flex-col gap-2">
      <BackToManagementButton />
      <form onSubmit={handleSubmit(onSubmit)} className={`flex flex-col gap-2`}>
        <div className="flex flex-col">
          <label htmlFor="title">נושא השיעור:</label>
          <input
            type="text"
            id="title"
            placeholder="כתוב את נושא השיעור."
            {...register("title", {
              required: "חייב לכתוב את נושא השיעור",
            })}
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
          <button type="submit" className="bg-my-topic p-2 rounded-3xl">
            מחק
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeleteLesson;
