// import { createSlice } from '@reduxjs/toolkit';
// import {
//   LOGIN_REQUEST,
//   LOGIN_SUCCESS,
//   LOGIN_FAILURE,
//   LOGOUT,
//   ADD_TODO_REQUEST,
//   ADD_TODO_SUCCESS,
//   ADD_TODO_FAILURE,
//   FETCH_TODOS_REQUEST,
//   FETCH_TODOS_SUCCESS,
//   FETCH_TODOS_FAILURE,
// } from '../actions/authActions';

// const initialState = {
//   isAuthenticated: false,
//   user: null,
//   error: null,
//   accessToken: localStorage.getItem('accessToken') || null,
//   refreshToken: localStorage.getItem('refreshToken') || null,
//   loading: false,
//   todos: [],
//   todoError: null,
//   todoLoading: false,
// };


// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(LOGIN_REQUEST, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(LOGIN_SUCCESS, (state, action) => {
//         state.loading = false;
//         state.isAuthenticated = true;
//         state.user = action.payload.user;
//         state.accessToken = action.payload.accessToken;
//         state.refreshToken = action.payload.refreshToken;
//       })
//       .addCase(LOGIN_FAILURE, (state, action) => {
//         state.loading = false;
//         state.isAuthenticated = false;
//         state.error = action.payload;
//       })
//       .addCase(LOGOUT, (state) => {
//         state.isAuthenticated = false;
//         state.user = null;
//         state.accessToken = null;
//         state.refreshToken = null;
//         state.error = null;
//       })
//       .addCase(ADD_TODO_REQUEST, (state) => {
//         state.todoLoading = true;
//         state.todoError = null;
//       })
//       .addCase(ADD_TODO_SUCCESS, (state, action) => {
//         state.todoLoading = false;
//         state.todos.push(action.payload);
//       })
//       .addCase(ADD_TODO_FAILURE, (state, action) => {
//         state.todoLoading = false;
//         state.todoError = action.payload;
//       })
//       .addCase(FETCH_TODOS_REQUEST, (state) => {
//         state.todoLoading = true;
//         state.todoError = null;
//       })
//       .addCase(FETCH_TODOS_SUCCESS, (state, action) => {
//         state.todoLoading = false;
//         state.todos = action.payload;
//       })
//       .addCase(FETCH_TODOS_FAILURE, (state, action) => {
//         state.todoLoading = false;
//         state.todoError = action.payload;
//       });
//   },
// });

// export default authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { login, addTodo, fetchTodos } from '../actions/authActions'; // Импорт createAsyncThunk actions

interface User {
    id: number;
    email: string;
    username: string;
    // ... другие поля пользователя
}

interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    error: string | null;
    accessToken: string | null;
    refreshToken: string | null;
    loading: boolean;
    todos: any[]; // Замените 'any' на корректный тип ваших данных
    todoError: string | null;
    todoLoading: boolean;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    error: null,
    accessToken: localStorage.getItem('accessToken') || null,
    refreshToken: localStorage.getItem('refreshToken') || null,
    loading: false,
    todos: [],
    todoError: null,
    todoLoading: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload.user; //Здесь предполагается, что AuthResponse содержит поле user
                state.accessToken = action.payload.accessToken;
                state.refreshToken = action.payload.refreshToken;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.error = action.payload;
            })
            .addCase(addTodo.pending, (state) => {
                state.todoLoading = true;
                state.todoError = null;
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.todoLoading = false;
                state.todos.push(action.payload);
            })
            .addCase(addTodo.rejected, (state, action) => {
                state.todoLoading = false;
                state.todoError = action.payload;
            })
            .addCase(fetchTodos.pending, (state) => {
                state.todoLoading = true;
                state.todoError = null;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.todoLoading = false;
                state.todos = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.todoLoading = false;
                state.todoError = action.payload;
            });
    },
});

export default authSlice.reducer;
