import React from "react";
import { course } from "../Interfaces/course";
import { Button, Form } from "react-bootstrap";

export function CourseTable({ course }: { course: course[] }): JSX.Element {
    return (
        <table className="Course-table">
            <tr>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Credits</th>
            </tr>
            {course.map((course: course) => (
                <tr key={course.code}>
                    <td>{course.code}</td>
                    <td>{course.name}</td>
                    <td>{course.credits}</td>
                </tr>
            ))}
        </table>
    );
}
