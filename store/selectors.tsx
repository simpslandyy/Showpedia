import { createSelector } from 'reselect';
import { IState } from './reducer'

const getSearchQuery = createSelector(
  (state: IState) => state.search_query,
  result => result
);

export {
  getSearchQuery
}