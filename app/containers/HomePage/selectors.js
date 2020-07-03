/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectTodos = () =>
  createSelector(
    selectHome,
    homeState => homeState.todos,
  );

export { selectHome, makeSelectTodos };
