import { atom } from "jotai";
import { Lesson } from "./types";
import lessonsJson from "../JSON/lessons.json";

export const lessonsDisplayAtom = atom<Lesson[]>(lessonsJson);

export const displayManagementAtom = atom<string>("");

export const isMenuOpenAtom = atom<boolean>(true);
