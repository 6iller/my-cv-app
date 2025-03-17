// import { LOGIN_SUCCESS, LOGIN_FAIL, AuthActionTypes } from '../actions/authActions';

// interface AuthState {
//     isAuthenticated: boolean;
//     error: string | null;
// }

// const initialState: AuthState = {
//     isAuthenticated: false,
//     error: null,
// };

// const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
//     switch (action.type) {
//         case LOGIN_SUCCESS:
//             return { ...state, isAuthenticated: true, error: null };
//         case LOGIN_FAIL:
//             return { ...state, isAuthenticated: false, error: action.payload };
//         default:
//             return state;
//     }
// };

// export default authReducer;

// ... (другие импорты) ...
// import { LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/authActions';

// interface AuthState {
//     isAuthenticated: boolean;
//     user: any | null;
//     error: string | null;
//     accessToken: string | null;
//     refreshToken: string | null;
// }

// const initialState: AuthState = {
//     isAuthenticated: false,
//     user: null,
//     error: null,
//     accessToken: null,
//     refreshToken: null,
// };

// const authReducer = (state = initialState, action: any): AuthState => {
//     switch (action.type) {
//         case LOGIN_SUCCESS:
//             return {
//                 ...state,
//                 isAuthenticated: true,
//                 user: action.payload.user,
//                 error: null,
//                 accessToken: action.payload.accessToken,
//                 refreshToken: action.payload.refreshToken,
//             };
//         case LOGIN_FAIL:
//             return { ...state, isAuthenticated: false, error: action.payload, accessToken: null, refreshToken: null };
//         default:
//             return state;
//     }
// };

// export default authReducer;

import { createSlice } from '@reduxjs/toolkit';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
} from '../actions/authActions';

const initialState = {
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
      .addCase(LOGIN_REQUEST, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(LOGIN_SUCCESS, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
      })
      .addCase(LOGIN_FAILURE, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      })
      .addCase(LOGOUT, (state) => {
        state.isAuthenticated = false;
        state.user = null;
        state.accessToken = null;
        state.refreshToken = null;
        state.error = null;
      })
      .addCase(ADD_TODO_REQUEST, (state) => {
        state.todoLoading = true;
        state.todoError = null;
      })
      .addCase(ADD_TODO_SUCCESS, (state, action) => {
        state.todoLoading = false;
        state.todos.push(action.payload);
      })
      .addCase(ADD_TODO_FAILURE, (state, action) => {
        state.todoLoading = false;
        state.todoError = action.payload;
      })
      .addCase(FETCH_TODOS_REQUEST, (state) => {
        state.todoLoading = true;
        state.todoError = null;
      })
      .addCase(FETCH_TODOS_SUCCESS, (state, action) => {
        state.todoLoading = false;
        state.todos = action.payload;
      })
      .addCase(FETCH_TODOS_FAILURE, (state, action) => {
        state.todoLoading = false;
        state.todoError = action.payload;
      });
  },
});

export default authSlice.reducer;