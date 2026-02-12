import { createSlice } from "@reduxjs/toolkit";

/**
 * App UI / global state slice.
 * Add more state and reducers as the app grows.
 */
const initialState = {
  sidebarCollapsed: false,
  notifications: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.sidebarCollapsed = !state.sidebarCollapsed;
    },
    setSidebarCollapsed(state, action) {
      state.sidebarCollapsed = Boolean(action.payload);
    },
    addNotification(state, action) {
      const { id, message, type = "info" } = action.payload;
      state.notifications.push({
        id: id ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        message,
        type,
      });
    },
    removeNotification(state, action) {
      state.notifications = state.notifications.filter(
        (n) => n.id !== action.payload
      );
    },
    clearNotifications(state) {
      state.notifications = [];
    },
  },
});

export const {
  toggleSidebar,
  setSidebarCollapsed,
  addNotification,
  removeNotification,
  clearNotifications,
} = appSlice.actions;

export default appSlice.reducer;
