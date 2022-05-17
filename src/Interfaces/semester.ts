import { course } from "./course";

export interface semester {
    id: number; //maybe a number
    session: string;
    year: string;
    courses: course[];
}
