import { createStore } from 'redux';
import { reducer } from '../reducers';
import { State } from '../common/interfaces';

const store = createStore<State, any, any, any>(reducer);

export default store;
