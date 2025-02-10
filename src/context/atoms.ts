import { atom } from "jotai";
import { Lesson } from "./types";
import { getLessonsLocalStorage } from "../functions/getLessonsLocalStorage";


export const lessonsLocalStorageAtom = atom<object[]>(getLessonsLocalStorage());

export const lessonsDisplayAtom = atom<Lesson[]>(getLessonsLocalStorage());

export const displayManagementAtom = atom<string>("");

export const displayComponentAtom = atom<string>("");

export const isMenuOpenAtom = atom<boolean>(true);

export const isDetailLessonsHiddenAtom=atom<boolean>(false)

