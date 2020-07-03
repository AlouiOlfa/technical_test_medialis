// eslint-disable-next-line import/named
import { ADD_TODOITEM, REMOVE_TODOITEM } from './constants';

export function addTodoItem(todo) {
  return {
    type: ADD_TODOITEM,
    todo,
  };
}
export function removeTodoItem(todo) {
  return {
    type: REMOVE_TODOITEM,
    todo,
  };
}
