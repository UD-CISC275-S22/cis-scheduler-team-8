import React from "react";
import { ListGroup } from "react-bootstrap";
import { course } from "../Interfaces/course";

export function CourseList({ courses }: { courses: course[] }): JSX.Element {
    return (
        <ListGroup as="ol" numbered>
            {courses.map((course: course) => (
                <ListGroup.Item
                    as="li"
                    key={course.code}
                    className="d-flex align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{course.name}</div>
                        {course.credits}
                    </div>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}
