
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import TodoList from '../../components/ToDoList/index';
import AddTodo from '../../components/Todo';
import AppWrapper from '../App/style';
export default function HomePage() {
  return (
    <AppWrapper>
      <h1>
      <FormattedMessage {...messages.header} />
      </h1>
      <br />
      <AddTodo />
      <h2>Todo List:</h2>
      <TodoList />
    </AppWrapper>
  );
}
