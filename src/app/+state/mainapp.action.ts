import { createAction, props } from '@ngrx/store';

const loadContent = createAction('[Get Data] Load Content');
const loadContentSuccess = createAction('[Get Data] Load Content Success', props<{ posts: any }>());

export const MyPersonalActions = {
  loadContent,
  loadContentSuccess
};
