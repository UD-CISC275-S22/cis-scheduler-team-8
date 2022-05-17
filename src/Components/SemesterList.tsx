import React from "react";
import { semester } from "../Interfaces/semester";
import { Stack } from "react-bootstrap";
import { SemesterView } from "./SemesterView";

export function SemesterList({
    semesters,
    deleteSemester,
    editSemester
}: {
    semesters: semester[];
    deleteSemester: (id: string) => void;
    editSemester: (id: number, newSemester: semester) => void;
}): JSX.Element {
    return (
        <Stack gap={3}>
            {semesters.map((semester: semester) => (
                <div key={semester.id} className="bg-light border m-2 p-2">
                    <SemesterView
                        semester={semester}
                        deleteSemester={deleteSemester}
                        editSemester={editSemester}
                    ></SemesterView>
                </div>
            ))}
        </Stack>
    );
}
