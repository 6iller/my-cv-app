// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from '../reducers/authReducer';
// import todoReducer from '../../Redux/reducers/todoReducer'; // Импорт нового reducer'а

// const store = configureStore({
//     reducer: {
//       auth: authReducer,
//       todo: todoReducer, // Добавление todo reducer'а
//     },
//   });
  
//   export default store;
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;