import { configureStore } from '@reduxjs/toolkit';

// criar o estado e ações da aplicação
import userReducer from './userSlice';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
