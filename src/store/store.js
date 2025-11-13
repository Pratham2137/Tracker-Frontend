// Redux Toolkit store scaffold (not wired by default)
import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/authSlice';
export const store = configureStore({
  reducer: {
      auth: authSlice,
    // add slices here, e.g. ui: uiReducer
  },
  // middleware: (getDefault) => getDefault().concat(customMiddleware),
});

export default store;
