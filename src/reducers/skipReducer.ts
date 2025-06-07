import type { ReducerAction, SkipHireState } from "../contexts/types.ts";
import {
  CLEAR_SKIP,
  NEXT_STEP,
  PREV_STEP,
  SELECT_SKIP,
  SET_STEP,
} from "../constants/ActionTypes.ts";

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

    case PREV_STEP:
      return {
        ...state,
        currentStepIndex: Math.max(state.currentStepIndex - 1, 0),
      };

    case NEXT_STEP:
      return {
        ...state,
        currentStepIndex: Math.min(state.currentStepIndex + 1, 5),
      };

    case SELECT_SKIP:
      return {
        ...state,
        skipSelected: action.payload.skip,
      };

    case CLEAR_SKIP:
      return {
        ...state,
        skipSelected: null,
      };

    default:
      return state;
  }
}
