import { CandidatesActionTypes } from './enums';

export interface  SvgProps {
    className: string,
    glyph: string,
}

export interface FeedBlockProps {
    glyph: string,
    variant: string,
}

export interface Candidate {
    fullName: string,
    id: number,
    profilePic: string,
}

export interface InitCandidatesAction {
    type: CandidatesActionTypes.INIT_CANDIDATES,
    payload: Candidate[],
}

export interface AppState {
    candidates: Candidate[],
}
