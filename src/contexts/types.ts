import type { Skip } from "../types/Skip";

export type SkipHireState = {
  currentStepIndex: number;
  skipSelected: Skip | null;
  postcode: string;
  area: string;
};

export type ReducerAction = {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
};

export type SkipHireContextType = {
  state: SkipHireState;
  dispatch: React.Dispatch<ReducerAction>;
};
