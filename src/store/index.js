import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";
import themeReducer from "./slices/themeSlice";

/**
 * Root Redux store. Add slice reducers here as features are added.
 */
export const store = configureStore({
  reducer: {
    app: appReducer,
    theme: themeReducer,
  },
});
