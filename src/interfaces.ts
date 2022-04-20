export interface course {
    code: string;
    name: string;
    prereqs: string;
    credits: number;
    taken: boolean;
}

export interface degree {
    taken: boolean;
    type: string;
}

export interface session {
    session: string;
    year: number;
}
