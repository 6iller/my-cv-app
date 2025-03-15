import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../components/Redux/actions/authActions'; // Импортируем addTodo action

const ToDo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos); // Получаем todos из состояния Redux

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      dispatch(addTodo("поспать 8 часов", 1));
    }
  }, [dispatch]);

  return (
    <div>
      <h1>Список дел</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;