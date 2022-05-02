import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { course } from "../Interfaces/course";

export function CourseEditor({
    courses,
    setCourses
}: {
    courses: course[];
    setCourses: (courses: course[]) => void;
}): JSX.Element {
    const [courseList, setCourseList] = useState<course[]>(courses);

    //changes the code
    function changeCode(code: number, newCode: number) {
        setCourseList(
            courses.map(
                (course: course): course =>
                    course.code === code ? { ...course, code: newCode } : course
            )
        );
        setCourses(
            courses.map(
                (course: course): course =>
                    course.code === code ? { ...course, code: newCode } : course
            )
        );
    }

    //changes the title
    function changeTitle(code: number, newTitle: string) {
        setCourseList(
            courses.map(
                (course: course): course =>
                    course.code === code
                        ? { ...course, name: newTitle }
                        : course
            )
        );
        setCourses(
            courses.map(
                (course: course): course =>
                    course.code === code
                        ? { ...course, name: newTitle }
                        : course
            )
        );
    }

    //changes the credit
    function changeCredits(code: number, newCredits: number) {
        setCourseList(
            courses.map(
                (course: course): course =>
                    course.code === code
                        ? { ...course, credits: newCredits }
                        : course
            )
        );
        setCourses(
            courses.map(
                (course: course): course =>
                    course.code === code
                        ? { ...course, credits: newCredits }
                        : course
            )
        );
    }

    //delete course
    //add course

    return (
        <div>
            <table width="auto" className="Course-editor">
                <tr>
                    <th>Course Code</th>
                    <th>Course Name</th>
                    <th>Credits</th>
                    <th>Prereqs</th>
                    <th>Completed</th>
                    <th>Required</th>
                </tr>
                {courseList.map((course: course) => (
                    <tr key={course.code}>
                        <td>
                            <Form.Control
                                type="number"
                                value={course.code}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => {
                                    changeCode(course.code, event.target.value);
                                    console.log("Course code edited");
                                }}
                            />
                        </td>
                        <td>
                            <Form.Control
                                type="string"
                                value={course.name}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => {
                                    changeTitle(
                                        course.code,
                                        event.target.value
                                    );
                                    console.log("Course title edited");
                                }}
                            />
                        </td>
                        <td>
                            <Form.Control
                                type="number"
                                value={course.credits}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => {
                                    changeCredits(
                                        course.code,
                                        parseInt(event.target.value, 10)
                                    );
                                    console.log("Course credits edited");
                                }}
                            />
                        </td>
                        <td>
                            <Button>Delete</Button>
                        </td>
                    </tr>
                ))}
            </table>
            <Button>Add Course</Button>
        </div>
    );
}
