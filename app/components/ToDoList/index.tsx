import React, { memo } from 'react';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { removeTodoItem } from '../Todo/actions';
import PropTypes from 'prop-types';
import { makeSelectTodos } from '../Todo/selectors';
import { BUTTON, Ul } from './style';
const Todos = ({ todos }) => {
  const dispatch = useDispatch();
  return (
    <Ul>
      {todos && todos.length
        ? todos.map((todo, index) => {
          return <li key={index}>
            <span>{todo}</span> {' '}
            <BUTTON onClick={() => dispatch(removeTodoItem(todo))}>X</BUTTON>
          </li>;
        })
        : <p>No todos, yay!</p>}
    </Ul>
  );
};

Todos.propTypes = {
  todos: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  todos: makeSelectTodos(),
});

const withConnect = connect(
  mapStateToProps,
);

export default compose(
  withConnect,
  memo,
)(Todos);
