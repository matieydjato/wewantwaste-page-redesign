import type { ReducerAction, SkipHireState } from "../contexts/types.ts";
import {
  CLEAR_SKIP,
  NEXT_STEP,
  PREV_STEP,
  SELECT_SKIP,
  SET_STEP,
} from "../constants/ActionTypes.ts";
import { STEPS } from "../constants/Steps.ts";

export default function skipReducer(
  state: SkipHireState,
  action: ReducerAction
): SkipHireState {
  switch (action.type) {
    case SET_STEP: {
      // Clamp the step index between 0 and STEPS length to prevent out-of-bounds navigation
      const newIndex = Math.max(
        0,
        Math.min(action.payload.step, STEPS.length - 1)
      );
      return {
        ...state,
        currentStepIndex: newIndex,
      };
    }

    case PREV_STEP:
      // Move to the previous step, but not below 0
      return {
        ...state,
        currentStepIndex: Math.max(state.currentStepIndex - 1, 0),
      };

    case NEXT_STEP:
      // Move to the next step, but not above STEPS lentgh
      return {
        ...state,
        currentStepIndex: Math.min(
          state.currentStepIndex + 1,
          STEPS.length - 1
        ),
      };

    case SELECT_SKIP:
      // Set the selected skip in state
      return {
        ...state,
        skipSelected: action.payload.skip,
      };

    case CLEAR_SKIP:
      // Clear the selected skip from state
      return {
        ...state,
        skipSelected: null,
      };

    default:
      return state;
  }
}
