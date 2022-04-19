import { course } from "./course";

export interface semester {
    id: number;
    session: string;
    year: string;
    courses: course[];
}
