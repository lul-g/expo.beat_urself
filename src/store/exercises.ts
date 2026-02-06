// app/store/exercises.ts
import { createExerciseStore } from "./exerciseFactory.store";

export const usePushupStore = createExerciseStore(1); // 1 point per pushup
export const useSitupStore = createExerciseStore(0.5); // 0.5 point per situp
export const useStepStore = createExerciseStore(0.5); // 0.5 point per step
