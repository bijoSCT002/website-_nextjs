import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useAppStore = create(
  devtools(
    (set) => ({
  sidebarCollapsed: false,
  notifications: [],
  toggleSidebar: () =>
    set((s) => ({ sidebarCollapsed: !s.sidebarCollapsed })),
  setSidebarCollapsed: (v) =>
    set({ sidebarCollapsed: Boolean(v) }),
  addNotification: (payload) =>
    set((s) => {
      const { id, message, type = "info" } = payload;
      return {
        notifications: [
          ...s.notifications,
          {
            id: id ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`,
            message,
            type,
          },
        ],
      };
    }),
  removeNotification: (id) =>
    set((s) => ({
      notifications: s.notifications.filter((n) => n.id !== id),
    })),
  clearNotifications: () => set({ notifications: [] }),
}),
    { name: "app" }
  )
);
