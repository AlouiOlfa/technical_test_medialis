import React from 'react';
import { useDispatch } from 'react-redux';
import StyledInput from '../input';
import StyledButton from '../Button';
import { addTodoItem } from './actions';
import reducer from './reducer';
import { useInjectReducer } from 'utils/injectReducer';

const key = 'home';
const AddTodo = () => {
  // @ts-ignore
  useInjectReducer({ key, reducer });

  const [item, setItem] = React.useState('');
  const dispatch = useDispatch();
  // @ts-ignore
  return (
   <div>
     <StyledInput value={item} placeholder="Add Todo" onChange={event => setItem(event.target.value)} />
     <StyledButton
       onClick={() => {dispatch(addTodoItem(item)); }}>
       Add
     </StyledButton>
   </div>
  );
};
export default AddTodo;
