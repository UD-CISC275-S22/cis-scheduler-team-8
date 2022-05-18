import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { semester } from "../Interfaces/semester";
import { course } from "../Interfaces/course";
import { SemesterControl } from "./SemesterControl";
import { SemesterEditor } from "./SemesterEditor";

export function SemesterView({
    semester,
    deleteSemester,
    editSemester
}: {
    semester: semester;
    deleteSemester: (id: string) => void;
    editSemester: (id: number, newSemester: semester) => void;
}): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);

    function changeEditing() {
        setEdit(!edit);
    }
    return edit ? (
        <SemesterEditor
            changeEditing={changeEditing}
            semester={semester}
            deleteSemester={deleteSemester}
            editSemester={editSemester}
        ></SemesterEditor>
    ) : (
        <Container>
            <Row>
                <Col>
                    <h3>
                        {semester.session} {semester.year}
                    </h3>
                    <SemesterControl
                        changeEditing={changeEditing}
                    ></SemesterControl>
                </Col>
            </Row>
            <Row>
                <table className="Course-table">
                    <tr>
                        <th>Course Code</th>
                        <th>Course Name</th>
                        <th>Credits</th>
                    </tr>
                    {semester.courses.map((course: course) => (
                        <tr key={course.code}>
                            <td>{course.code}</td>
                            <td>{course.name}</td>
                            <td>{course.credits}</td>
                        </tr>
                    ))}
                </table>
            </Row>
        </Container>
    );
}
