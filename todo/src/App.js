import React, { useReducer } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { initialState, reducer } from './reducers/reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)
  const addTodo = (input) => {
    const newTodo = {
      todo: input,
      completed: false,
      id: 4
    }
    dispatch({type: "ADD_TODO", payload: newTodo})
  }

  const handleComplete = (id) => {
    dispatch({type:"COMPLETED", payload: id})
  }

  const clearCompleted = () => {
    dispatch({type: "CLEAR_COMPLETED"})
  }

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList state={state} handleComplete={handleComplete} />
      <TodoForm addTodo={addTodo} />
      <button onClick={(e) => {
        e.preventDefault()
        clearCompleted()
      }}>Clear Task</button>
    </div>
  );
}

export default App; 