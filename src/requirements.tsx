import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { degree } from "./Interfaces/plan";
import { semester } from "./Interfaces/semester";
import { course } from "./Interfaces/course";
import { SessionPicker } from "./session-picker";
import { CourseTable } from "./Components/courseTable";

export function Requirements(): JSX.Element {
    const defaultCourses: course[] = [
        {
            code: "CISC108",
            name: "Introduction to Computer Science I",
            prereqs: "None",
            credits: 3,
            taken: true,
            image: "test"
        }
    ];
    const defaultSem: semester[] = [
        {
            id: 1,
            session: "Fall",
            year: "2022",
            courses: defaultCourses
        }
    ];
    const degreeList: degree[] = [
        {
            id: 1,
            name: "Default Plan",
            semester: defaultSem
        }
    ];
    const degreeReqs: course[] = [
        {
            code: "CISC108",
            name: "test",
            prereqs: "string",
            credits: 3,
            taken: false,
            image: "❌"
        },
        {
            code: "CISC181",
            name: "test",
            prereqs: "string",
            credits: 3,
            taken: false,
            image: "❌"
        }
    ];
    function CheckCourses(course: course): boolean {
        //maybe try looking for 1 course at a time instead of comparing 2 lists
        const listLen = defaultCourses.length;
        course = defaultCourses[listLen - 1];
        const val = defaultCourses.map(
            (match: course): boolean => match === course
        );
        return val[val.length - 1];
        //maybe need nested map functions to compare two lists
    }
    function updateImage(): course[] {
        const listLen = defaultCourses.length;
        const test = CheckCourses(defaultCourses[listLen - 1]);
        if (test === true) {
            const updateReqs = degreeReqs.map(
                (course: course): course => ({
                    ...degreeReqs,
                    code: course.code,
                    name: course.name,
                    prereqs: course.prereqs,
                    credits: course.credits,
                    taken: true,
                    image: "✅"
                })
            );
            return updateReqs;
        } else {
            return degreeReqs;
        }
    }
    return (
        <div>
            {" "}
            Requirements:
            <Button onClick={updateImage}>Update</Button>
            <ul>
                {degreeReqs.map((course: course) => {
                    course.code, course.image;
                })}
            </ul>
        </div>
    );
}
