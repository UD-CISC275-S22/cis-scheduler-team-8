import { semester } from "./semester";

export interface degree {
    id: number;
    name: string;
    semester: semester[];
}
