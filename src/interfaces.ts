export interface course {
    name: string;
    prereqs: string;
    credits: number;
    taken: boolean;
}

export interface degree {
    taken: boolean;
    type: string;
}

export interface semester {
    session: string;
    year: number;
}
