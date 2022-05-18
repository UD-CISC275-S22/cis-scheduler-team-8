import React from "react";
import { Stack } from "react-bootstrap";

//interfaces
import { degree } from "../Interfaces/plan";
//
import { PlanView } from "./PlanView";

export function PlanList({
    plans,
    editPlan,
    deletePlan
}: {
    plans: degree[];
    deletePlan: (id: string) => void;
    editPlan: (id: number, newDegree: degree) => void;
}): JSX.Element {
    return (
        <Stack gap={3}>
            {plans.map((plan: degree) => (
                <div key={plan.id} className="bg-light border m-2 p-2">
                    <PlanView
                        plan={plan}
                        editPlan={editPlan}
                        deletePlan={deletePlan}
                    ></PlanView>
                </div>
            ))}
        </Stack>
    );
}
