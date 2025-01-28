export type Lesson = {
  lessonID: number;
  lessonTitle: string;
  lessonName: string;
  lessonSrc: string;
  lessonSummary?: string;
  lessonSuorces?: string;
};

export type User = {
  userID: number;
  userFirstName: string;
  userLastName: string;
  userEmail: string;
  userPassword: string;
  role: string;
};
