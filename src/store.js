import { createStore, combineReducers } from 'redux';
import numReducer from './reducers/reducer';

export const store = createStore(combineReducers({ num: numReducer }));
