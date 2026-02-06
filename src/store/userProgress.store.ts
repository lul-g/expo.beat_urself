import { create } from "zustand";

interface UserProgressState {
  level: number;
  currentXP: number;

  addXP: (points: number) => void;
  setLevel: (level: number) => void;
  setXP: (xp: number) => void;
}

export const useUserProgressStore = create<UserProgressState>((set, get) => ({
  level: 1,
  currentXP: 0,

  addXP: (points) =>
    set((state) => {
      let newXP = state.currentXP + points;
      let newLevel = state.level;

      while (newXP >= newLevel * 1000) {
        newXP -= newLevel * 1000;
        newLevel += 1;
      }

      return { currentXP: newXP, level: newLevel };
    }),

  setLevel: (level) => set({ level }),
  setXP: (xp) => set({ currentXP: xp }),
}));
