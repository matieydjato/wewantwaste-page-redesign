import type { ReducerAction, SkipHireState } from "../contexts/types";
import { SET_STEP } from "../constants/ActionTypes";

export default function skipReducer(
  state: SkipHireState,
  action: ReducerAction
): SkipHireState {
  switch (action.type) {
    case SET_STEP:
      const newIndex = Math.max(0, Math.min(action.payload.step, 5));
      return {
        ...state,
        currentStepIndex: newIndex,
      };

    default:
      return state;
  }
}
