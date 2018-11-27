import { Candidate, InitCandidatesAction } from '../common/interfaces';
import { CandidatesActionTypes } from '../common/enums';

export function initCandidates(candidates: Candidate[]): InitCandidatesAction {
    return {
        type: CandidatesActionTypes.INIT_CANDIDATES,
        payload: candidates,
    }
}
