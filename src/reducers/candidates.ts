import candidates from '../common/candidates';
import { AppState, InitCandidatesAction } from '../common/interfaces';
import { CandidatesActionTypes } from '../common/enums';

export const initialState: AppState = {
    candidates,
};

export function reducer(state: AppState = initialState, action: InitCandidatesAction) {
    switch (action.type) {
        case CandidatesActionTypes.INIT_CANDIDATES:
          return {
              ...state,
              ...action.payload,
          };
        default:
            return state;
    }
}
