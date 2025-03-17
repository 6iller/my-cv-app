import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authReducer';
import todoReducer from '../reducers/todoReducer';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const store = configureStore({
    reducer: {
      auth: authReducer,
      todo: todoReducer,
    },
  });
  
  export default store;

  export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = AppDispatch & ThunkAction<ReturnType, RootState, unknown, AnyAction>
export const useAppDispatch: () => AppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;