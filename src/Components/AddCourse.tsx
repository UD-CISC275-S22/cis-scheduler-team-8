import React from "react";
import { Button } from "react-bootstrap";
//interfaces
import { course } from "../Interfaces/course";

//components
import { AddClass } from "../Data/addClass";

export function AddCourses({
    courses,
    setCourses
}: {
    courses: course[];
    setCourses: (courses: course[]) => void;
}): JSX.Element {
    function addClass(newCode: string, newName: string, newCredits: number) {
        const newClasses = [
            ...courses,
            {
                id: "",
                code: newCode,
                name: newName,
                prereq: "",
                credits: newCredits
            }
        ];
        setCourses(newClasses);
    }

    function editClass(codeFind: string) {
        const newClasses = courses.filter(
            (Class: course): boolean => Class.code !== codeFind
        );
        setCourses(newClasses);
    }
    function removeClass(codeFind: string) {
        const newClasses = courses.filter(
            (Class: course): boolean => Class.code !== codeFind
        );
        setCourses(newClasses);
    }

    return (
        <div>
            <table className="edit-table">
                <tr>
                    <th>Course Code</th>
                    <th>Course Name</th>
                    <th>Credits</th>
                </tr>
                {courses.map(
                    (course: course): JSX.Element => (
                        <tr key={course.code}>
                            <td>{course.code}</td>
                            <td>{course.name}</td>
                            <td>{course.credits}</td>
                            <td>
                                <Button onClick={() => editClass(course.code)}>
                                    Edit
                                </Button>
                            </td>
                            <td>
                                <Button
                                    onClick={() => removeClass(course.code)}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    )
                )}
            </table>
            <AddClass addClass={addClass}></AddClass>
        </div>
    );
}
