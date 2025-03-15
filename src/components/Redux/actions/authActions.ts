
// import axios from 'axios';
// import { Dispatch } from 'redux';

// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// export const LOGIN_FAIL = 'LOGIN_FAIL';

// interface LoginSuccessAction {
//     type: typeof LOGIN_SUCCESS;
//     payload: { id: number; name: string };
// }

// interface LoginFailAction {
//     type: typeof LOGIN_FAIL;
//     payload: string;
// }

// export type AuthActionTypes = LoginSuccessAction | LoginFailAction;
// export const login = (username: string, password: string) => async (dispatch: Dispatch<AuthActionTypes>) => {
//     console.log('Попытка входа с:', username, password);
//     try {
//         const response = await axios.get('https://dummyjson.com/users');
//         const users = response.data.users;

//         // Ищем пользователя по имени или email
//         const user = users.find((user: any) => user.firstName === username || user.email === username);

//         if (user) {
//             const { id, firstName: name } = user;
//             dispatch({ type: LOGIN_SUCCESS, payload: { id, name } });
//             console.log('Успешный вход:', user);
//         } else {
//             dispatch({ type: LOGIN_FAIL, payload: 'Неверные учетные данные' });
//             console.log('Ошибка: Неверные учетные данные');
//         }
//     } catch (error) {
//         dispatch({ type: LOGIN_FAIL, payload: 'Ошибка входа' });
//         console.error('Ошибка при входе:', error);
//     }
// };

import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';

export const LOGIN_SUCCESS = 'auth/loginSuccess';
export const LOGIN_FAIL = 'auth/loginFail';

const loginSuccess = createAction(LOGIN_SUCCESS, (payload: { accessToken: string; refreshToken: string; user: any }) => ({ payload }));
const loginFail = createAction(LOGIN_FAIL, (payload: string) => ({ payload }));

export const login = (email: string, password: string) => async (dispatch: any) => {
    try {
        // 1. Найти username по email
        const usersResponse = await axios.get('https://dummyjson.com/users');
        const usersData = usersResponse.data.users;
        const user = usersData.find((user: any) => user.email === email);

        if (!user) {
            throw new Error('Пользователь не найден.');
        }

        // 2. Отправить запрос на авторизацию с найденным username
        const authResponse = await axios.post('https://dummyjson.com/auth/login', {
            username: user.username,
            password,
            expiresInMins: 30,
        });

        console.log("Ответ сервера:", authResponse.data);
        const data = authResponse.data;
        if (!data.accessToken || !data.refreshToken) {
            throw new Error('Токены не найдены в ответе сервера.');
        }

        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        dispatch(loginSuccess({ accessToken: data.accessToken, refreshToken: data.refreshToken, user: user })); // Используем найденного пользователя
    } catch (error: any) {
        const errorMessage = error.response?.data?.message || error.message || 'Ошибка входа';
        dispatch(loginFail(errorMessage));
        console.error("Ошибка:", error);
    }
};

export const logout = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};

export const ADD_TODO_SUCCESS = 'todo/addTodoSuccess';
export const addTodoSuccess = createAction(ADD_TODO_SUCCESS, (payload: any) => ({ payload }));


export const addTodo = (todoText: string, userId: number) => async (dispatch: any) => {
  try {
    const response = await fetch('https://dummyjson.com/todos/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ todo: todoText, completed: false, userId }),
    });

    if (!response.ok) {
      throw new Error(`Ошибка добавления дела: ${response.status}`);
    }

    const newTodo = await response.json();
    dispatch(addTodoSuccess(newTodo));
  } catch (error) {
    console.error("Ошибка при добавлении дела:", error);
    // Здесь можно добавить dispatch для экшена ошибки, если нужно
  }
};