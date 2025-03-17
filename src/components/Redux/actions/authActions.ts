import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';

export const LOGIN_REQUEST = 'auth/loginRequest';
export const LOGIN_SUCCESS = 'auth/loginSuccess';
export const LOGIN_FAILURE = 'auth/loginFailure';
export const LOGOUT = 'auth/logout';
export const ADD_TODO_REQUEST = 'todo/addTodoRequest';
export const ADD_TODO_SUCCESS = 'todo/addTodoSuccess';
export const ADD_TODO_FAILURE = 'todo/addTodoFailure';
export const FETCH_TODOS_REQUEST = 'todo/fetchTodosRequest';
export const FETCH_TODOS_SUCCESS = 'todo/fetchTodosSuccess';
export const FETCH_TODOS_FAILURE = 'todo/fetchTodosFailure';


const loginRequest = createAction(LOGIN_REQUEST);
export const loginSuccess = createAction(LOGIN_SUCCESS, (payload: { accessToken: string; refreshToken: string; user: any }) => ({ payload }));
export const loginFailure = createAction(LOGIN_FAILURE, (payload: string) => ({ payload }));
export const logoutAction = createAction(LOGOUT);

export const login = (email: string, password: string) => async (dispatch: any) => {
    dispatch(loginRequest());
    try {
        const usersResponse = await axios.get('https://dummyjson.com/users');
        const usersData = usersResponse.data.users;
        const user = usersData.find((user: any) => user.email === email);

        if (!user) {
            throw new Error('Пользователь не найден.');
        }

        const authResponse = await axios.post('https://dummyjson.com/auth/login', {
            username: user.username,
            password,
            expiresInMins: 30,
        });

        const data = authResponse.data;
        if (!data.accessToken || !data.refreshToken) {
            throw new Error('Токены не найдены в ответе сервера.');
        }

        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        dispatch(loginSuccess({ accessToken: data.accessToken, refreshToken: data.refreshToken, user: user }));
    } catch (error: any) {
        dispatch(loginFailure(error.message));
    }
};

export const logout = () => (dispatch: any) => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    dispatch(logoutAction());
};


const addTodoRequest = createAction(ADD_TODO_REQUEST);
export const addTodoSuccess = createAction(ADD_TODO_SUCCESS, (payload: any) => ({ payload }));
export const addTodoFailure = createAction(ADD_TODO_FAILURE, (payload: string) => ({ payload }));

export const addTodo = (todoText: string, userId: number) => async (dispatch: any) => {
    dispatch(addTodoRequest());
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
        dispatch(addTodoFailure(error.message));
    }
};


const fetchTodosRequest = createAction(FETCH_TODOS_REQUEST);
export const fetchTodosSuccess = createAction(FETCH_TODOS_SUCCESS, (payload: any) => ({ payload }));
export const fetchTodosFailure = createAction(FETCH_TODOS_FAILURE, (payload: string) => ({ payload }));

export const fetchTodos = (userId: number) => async (dispatch: any) => {
    dispatch(fetchTodosRequest());
    try {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            throw new Error('Ошибка: токен не найден.');
        }

        const response = await fetch(`https://dummyjson.com/todos/user/${userId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Ошибка при получении TODO: ${response.status}`);
        }

        const data = await response.json();
        dispatch(fetchTodosSuccess(data.todos));
    } catch (error) {
        dispatch(fetchTodosFailure(error.message));
    }
};