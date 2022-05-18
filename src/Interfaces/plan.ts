import { semester } from "./semester";

export interface degree {
    id: number;
    name: string;
    semesters: semester[];
}
