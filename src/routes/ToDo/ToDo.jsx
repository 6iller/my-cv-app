// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addTodo } from '../../components/Redux/actions/authActions'; // Импортируем addTodo action

// const ToDo = () => {
//   const dispatch = useDispatch();
//   const todos = useSelector((state) => state.todo.todos); // Получаем todos из состояния Redux

//   useEffect(() => {
//     const accessToken = localStorage.getItem('accessToken');
//     if (accessToken) {
//       dispatch(addTodo("поспать 8 часов", 1));
//     }
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>Список дел</h1>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>{todo.todo}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ToDo;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../../components/Redux/actions/authActions';

const ToDo = () => {
  const dispatch = useDispatch();
  const { todos, todoLoading, todoError } = useSelector((state) => state.auth);
  const userId = useSelector((state) => state.auth.user?.id); // Получаем userId из user объекта

  useEffect(() => {
    if (userId) {
      dispatch(fetchTodos(userId));
    }
  }, [dispatch, userId]);

  if (todoLoading) {
    return <div>Загрузка...</div>;
  }

  if (todoError) {
    return <div>Ошибка: {todoError}</div>;
  }

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