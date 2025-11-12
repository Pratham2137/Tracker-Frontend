// Redux Toolkit store scaffold (not wired by default)
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // add slices here, e.g. ui: uiReducer
  },
  // middleware: (getDefault) => getDefault().concat(customMiddleware),
});

export default store;
