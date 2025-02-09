export type LessonBasic = {
  title: string;
  name: string;
};
export type LessonForm = LessonBasic & {
  src: string;
  summary: string | undefined;
  sources: string | undefined;
};
export type Lesson = LessonForm & { id: string };

export type UserForm = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
export type User = UserForm & {
  id: number;
  role: string;
};
