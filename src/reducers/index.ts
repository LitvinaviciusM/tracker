import { combineReducers } from 'redux';
import * as feed from './feed';
import * as candidates from './candidates';
import { State } from '../common/interfaces';

export const initialState = {
    candidates: candidates.initialState,
    feed: feed.initialState,
};

export const reducer = combineReducers<State>({
    feed: feed.reducer,
    candidates: candidates.reducer,
});
