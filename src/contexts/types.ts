import type { Skip } from "../types/Skip";

export interface SkipHireState {
  currentStepIndex: number;
  skipSelected: Skip | null;
}

export type ReducerAction = {
  type: string;
  payload?: any;
};

export type SkipHireContextType = {
  state: SkipHireState;
  dispatch: React.Dispatch<ReducerAction>;
};
