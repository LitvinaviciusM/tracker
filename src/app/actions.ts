import {Candidate, initCandidatesAction} from '../common/interfaces';
import { CandidatesActionTypes } from '../common/enums';

export function initCandidates(candidates: Candidate[]): initCandidatesAction {
    return {
        type: CandidatesActionTypes.INIT_CANDIDATES,
        payload: candidates,
    }
}
