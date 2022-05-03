import React, { useState } from "react";
import { course } from "../Interfaces/course";
import { semester } from "../Interfaces/semester";
import { Row, Col, Container } from "react-bootstrap";
import { CourseTable } from "./courseTable";

export function SemesterView({ course }: { course: course[] }): JSX.Element {
    return (
        <Container>
            <CourseTable course={course}></CourseTable>
        </Container>
    );
}
