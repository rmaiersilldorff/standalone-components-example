import { createReducer } from '@ngrx/store';

export interface AppState {
    title: string;
}

export const initState: AppState = {
    title: 'Reise Application'
};

export const reducer = createReducer(
    initState
);
