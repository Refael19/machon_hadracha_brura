import { useForm } from "react-hook-form";
import BackToManagementButton from "../BackToManagementButton";
import { Lesson, LessonBasic, LessonForm } from "../../../../context/types";
import { useState } from "react";
import { setEditLessonLocalStorage } from "../../../../functions/setLessonLocalStorage";
import { getFoundLesson } from "../../../../functions/getFoundLesson";
import { extractYouTubeID } from "../../../../functions/extractYouTubeID";

const EditLesson = () => {
  const [isFoundLesson, setIsFoundLesson] = useState<boolean>(false);
  let [prevLesson, setPrevLesson] = useState<Lesson | undefined>(undefined);

  const {
    register: registerFound,
    handleSubmit: handleSubmitFound,
    formState: { errors: errorsFound },
    reset: resetFound,
  } = useForm<LessonBasic>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LessonForm>();

  const foundLesson = (lesson: LessonBasic): void => {
    const theFoundLesson: Lesson | undefined = getFoundLesson(lesson);
    if (theFoundLesson) {
      setPrevLesson(theFoundLesson);
      setIsFoundLesson(true);
      resetFound();
    } else alert("השיעור לא נמצא, נסה שוב.");
  };

  const onSubmit = (lesson: LessonForm) => {
    let inputSrc: string | null = extractYouTubeID(lesson.src);
    let link: string = `https://www.youtube.com/embed/${inputSrc}`;
    if (inputSrc) {
      if (isFoundLesson) {
        const editLesson: Lesson = {
          title: lesson.title,
          name: lesson.name,
          src: link,
          summary: lesson.summary,
          sources: lesson.sources,
          id: prevLesson?.id ?? "id",
        };
        setEditLessonLocalStorage(editLesson);
        setPrevLesson(undefined);
        setIsFoundLesson(false);
        reset();
      } else alert("השיעור לא נערך בהצלחה, נסה שוב.");
    } else alert("הקישור לא תקין, החלף בקישור תקין ונסה שוב.");
  };

  return (
    <div className="bg-my-header rounded-2xl p-3 flex flex-col gap-2">
      <BackToManagementButton />
      <form
        onSubmit={handleSubmitFound(foundLesson)}
        className={`${!isFoundLesson ? "" : "hidden"} flex flex-col gap-2`}
      >
        <div className="flex flex-col">
          <label htmlFor="title">נושא השיעור:</label>
          <input
            type="text"
            id="title"
            placeholder="כתוב את נושא השיעור."
            {...registerFound("title", {
              required: "חייב לכתוב את נושא השיעור",
            })}
          />
          <p>{errorsFound.title?.message}</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="name">שם השיעור:</label>
          <input
            type="text"
            id="name"
            placeholder="כתוב את שם השיעור."
            {...registerFound("name", { required: "חייב לכתוב את שם השיעור" })}
          />
          <p>{errorsFound.name?.message}</p>
          <button type="submit" className="bg-my-topic mt-4 p-2 rounded-3xl">
            חפש
          </button>
        </div>
      </form>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`${isFoundLesson ? "" : "hidden"} flex flex-col gap-2`}
      >
        <div className="flex flex-col bg-my-header">
          <p>פרטי השיעור הנערך:</p>
          <div>
            <p>נושא השיעור:</p>
            <p>{prevLesson?.title}</p>
          </div>
          <div>
            <p>נושא השיעור:</p>
            <p>{prevLesson?.name}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="title">נושא השיעור:</label>
          <input
            type="text"
            id="title"
            defaultValue={prevLesson?.title}
            {...register("title", { required: "חייב לכתוב את נושא השיעור" })}
          />
          <p>{errors.title?.message}</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="name">שם השיעור:</label>
          <input
            type="text"
            id="name"
            defaultValue={prevLesson?.name}
            {...register("name", { required: "חייב לכתוב את שם השיעור" })}
          />
          <p>{errors.name?.message}</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="src">קישור לשיעור:</label>
          <input
            type="text"
            id="src"
            defaultValue={prevLesson?.src}
            {...register("src", { required: "חייב לכתוב את קישור השיעור" })}
          />
          <p>{errors.src?.message}</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="summary">תקציר לשיעור: (רשות)</label>
          <input
            type="text"
            id="summary"
            defaultValue={prevLesson?.summary}
            {...register("summary")}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="sources">מקורות לשיעור: (רשות)</label>
          <input
            type="text"
            id="sources"
            defaultValue={prevLesson?.sources}
            {...register("sources")}
          />
        </div>

        <button type="submit" className="bg-my-topic p-2 rounded-3xl">
          ערוך שיעור
        </button>
      </form>
    </div>
  );
};

export default EditLesson;
