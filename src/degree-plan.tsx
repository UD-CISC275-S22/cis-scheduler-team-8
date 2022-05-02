import React, { ChangeEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { SessionPicker } from "./session-picker";
import { degree } from "./Interfaces/plan";
import { semester } from "./Interfaces/semester";
import { course } from "./Interfaces/course";

interface PassNewDegree {
    addDegree: (n: number, r: string, s: semester[]) => void;
}

export function DegreePlan(): JSX.Element {
    // ask how to use interfaces!
    const [name, setName] = useState<string>("Plan");
    const [session, setSession] = useState<string>("Fall");
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
    const defaultPlan: degree[] = [
        {
            id: 1,
            name: "Default Plan",
            semester: defaultSem
        }
    ];
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;
    const plans = ["Degree Plan"];
    function updatePlans(Dplans: string[], event: ChangeEvent) {
        const [plan, setPlan] = useState<degree[]>(defaultPlan);
        const newPlanList = [...Dplans, event.target.value];
        function addDegree(
            newId: number,
            newName: string,
            newSemester: semester[]
        ) {
            const newPlan = [
                ...plan,
                {
                    id: newId,
                    name: newName,
                    semester: newSemester
                }
            ];
            setPlan(newPlan);
        }
    }
    return (
        <div>
            <Button onClick={() => updatePlans}> Add Plan </Button>
            <Form.Group controlId="degreeName">
                <Form.Label>Plan Name</Form.Label>
                <Form.Control
                    value={name}
                    onChange={updatePlans}
                ></Form.Control>
            </Form.Group>
        </div>
    );
}
