import { create } from "zustand";

export interface ExerciseState {
  repsSoFar: number; // what user did today
  multiplier: number; // points per unit
  points: number; // points accumulated for today
  addReps: (reps: number) => void;
  reset: () => void; // reset daily
}

export const createExerciseStore = (multiplier: number) =>
  create<ExerciseState>((set, get) => ({
    repsSoFar: 0,
    multiplier,
    points: 0,

    addReps: (amount: number) =>
      set((state) => {
        const totalToday = state.repsSoFar + amount;
        const totalPoints = totalToday * state.multiplier;

        return {
          repsSoFar: totalToday,
          points: totalPoints,
        };
      }),

    reset: () => set({ repsSoFar: 0, points: 0 }),
  }));
