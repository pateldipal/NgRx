import {Action, ActionReducerMap, createReducer, on, State} from '@ngrx/store';
import {MyPersonalActions} from './mainapp.action';

export const featureKey = 'hello';

export interface AdminContentState {
  posts: any;
  name: string;
}

export const initialState: AdminContentState = {
  posts: '',
  name: ''
};

export interface AdminAppState {
  [featureKey]: AdminContentState;
}

// @ts-ignore
export const getPostData = createReducer<AdminContentState>(
  initialState,
  on(MyPersonalActions.loadContentSuccess, (state, { posts }) => {
    return { ...state, posts, name: "Divyesh Tailor" };
  }),
);

// tslint:disable-next-line:typedef
export function reducer(state: AdminContentState | undefined, action: Action) {
  return getPostData(state, action);
}
