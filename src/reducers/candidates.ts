import candidates from '../common/candidates';
import { Candidates } from '../common/interfaces';

export const initialState: Candidates = {
    candidates,
};

export function reducer() {
    return {
        candidates,
    }
}
