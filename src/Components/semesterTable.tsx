//import React, { useState } from "react";
import React from "react";
import { semester } from "../Interfaces/semester";
import { Container, Row, Col } from "react-bootstrap";
//import { course } from "../Interfaces/course";
import { CourseTable } from "../Components/courseTable";

export function SemesterTable({
    Semester
}: {
    Semester: semester;
}): JSX.Element {
    //const [semesterState, setSemesterState] = useState<semester>(Semester);

    return (
        <Container className="Semester-view">
            <div key={Semester.id} className="Semester">
                <Row>
                    <Col>
                        <div className="Semester-header">
                            <h4>
                                {Semester.session} {Semester.year}
                            </h4>
                        </div>
                    </Col>
                </Row>
            </div>
            <div>
                <CourseTable course={Semester.courses}></CourseTable>
            </div>
        </Container>
    );
}
