import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCurrentUser = create(
  persist(
    (set, get) => ({
      currentUser: null,
      currentProjects: [],
      selectedProject: null,
      location: null,
      telegramBot: null,

      setCurrentUser: (user) => set({ currentUser: user }),
      removeCurrentUser: () => set({ currentUser: null }),

      addProject: (project) => {
        const updatedProjects = [...get().currentProjects, project];
        set({
          currentProjects: updatedProjects,
          selectedProject:
            updatedProjects.length > 0 ? updatedProjects[0] : null,
        });
      },
      removeProject: (project) => {
        const updatedProjects = get().currentProjects.filter(
          (p) => p !== project
        );
        set({
          currentProjects: updatedProjects,
          selectedProject:
            updatedProjects.length > 0 ? updatedProjects[0] : null,
        });
      },
      setSelectedProject: (project) => set({ selectedProject: project }),
      findSingleProject: (project) =>
        get().currentProjects.find((p) => p === project),
      removeAllProjects: () =>
        set({ currentProjects: [], selectedProject: null }),

      setLocation: (location) => set({ location }),

      addTelegramBot: (bot) => set({ telegramBot: bot }),
      deleteTelegramBot: () => set({ telegramBot: null }),
    }),
    {
      name: 'cryptomus-user-data',
    }
  )
);

export default useCurrentUser;
