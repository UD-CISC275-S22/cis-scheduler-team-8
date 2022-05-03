import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { degree } from "./Interfaces/plan";
import { semester } from "./Interfaces/semester";
import { course } from "./Interfaces/course";

//merge comment, delete later
const defaultCourses: course[] = [
    {
        code: "CISC108",
        name: "Introduction to Computer Science I",
        prereqs: "None",
        credits: 4,
        taken: true
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

export function DegreePlan(): JSX.Element {
    const [name, setName] = useState<string>("Plan");
    const [session, setSession] = useState<string>("Fall");
    const [plans, setPlan] = useState<degree[]>(degreeList);
    function updateSemester(event: React.ChangeEvent<HTMLSelectElement>) {
        setSession(event.target.value);
    }
    function updatePlans() {
        const newPlanList = [
            ...plans,
            {
                id: 0, //TODO figure out id updates
                name: name,
                semester: []
            }
        ];
        setPlan(newPlanList);
    }
    return (
        <div>
            <div>
                <Form.Group controlId="sessions">
                    <Form.Label>Plans</Form.Label>
                    <Form.Select value={session} onChange={updateSemester}>
                        {plans.map((item) => {
                            return (
                                <option key={item.name} value={item.name}>
                                    {" "}
                                    {item.name}{" "}
                                </option>
                            );
                        })}
                    </Form.Select>
                </Form.Group>
            </div>
            <div>
                <Button onClick={() => updatePlans()}> Add Plan </Button>
                <Form.Group controlId="degreeName">
                    <Form.Label>Plan Name</Form.Label>
                    <Form.Control
                        value={name}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setName(event.target.value)}
                    />
                </Form.Group>
            </div>
        </div>
    );
}
//TODO LIST
/*
1. figure out how to update id's
2. figure out how to handle new plan creation (creating new plan and jumping to semester buttons etc.)
*/
