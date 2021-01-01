import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AdminContentState, featureKey} from './mainapp.reducer';

export const getFeatureState = createFeatureSelector<AdminContentState>(featureKey);

export const fromAdminContent = {
  getPosts: createSelector(getFeatureState, state => state.posts),
  getName: createSelector(getFeatureState, state => state.name)
};
