import { create } from "zustand";

const useSidebarModal = create((set) => ({
  isSidebarOpen: false,
  openSidebar: () => set({ isSidebarOpen: true }),
  closeSidebar: () => set({ isSidebarOpen: false }),
}));

export default useSidebarModal;
