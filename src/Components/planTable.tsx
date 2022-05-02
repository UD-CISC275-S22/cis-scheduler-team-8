import React from "react";
import { semester } from "../Interfaces/semester";
import { Container, Row, Col } from "react-bootstrap";
import { SemesterView } from "./SemesterView";

export function SemesterList({
    semesters,
    editSemester,
    deleteSemester
}: {
    semesters: Semester[];
    editSemester: (id: number, newSemester: Semester) => void;
    deleteSemester: (id: number) => void;
}): JSX.Element {
    return (
        <Container className="Semester-list">
            {semesters.map((semester: Semester) => (
                <div key={semester.id} className="Semester">
                    <Row>
                        <Col>
                            <SemesterView
                                semesters={semester}
                                deleteSemester={deleteSemester}
                                editSemester={editSemester}
                            ></SemesterView>
                        </Col>
                    </Row>
                </div>
            ))}
        </Container>
    );
}
