import { useContext, useCallback } from "react";
import { SelectionFooter } from "./SelectionFooter";
import Show from "../Show";
import { SkipHireContext } from "../../contexts";
import { PREV_STEP, NEXT_STEP } from "../../constants/ActionTypes";
import { getStepKey } from "../../services/utils";

export default function StepFooter() {
  const { state, dispatch } = useContext(SkipHireContext)!;
  const { currentStepIndex } = state;
  const currentStepKey = getStepKey(currentStepIndex);

  const onClickBack = useCallback(() => {
    dispatch({ type: PREV_STEP });
  }, [dispatch]);

  const onClickContinue = useCallback(() => {
    dispatch({ type: NEXT_STEP });
  }, [dispatch]);

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-inner border-t border-gray-200 z-10">
      <Show ifCondition={currentStepKey === "selectSkip"}>
        <div className="max-w-6xl mx-auto px-4 pt-3 text-center">
          <p className="text-xs text-gray-500">
            Imagery and information shown throughout this website may not
            reflect the exact shape or size specification, colours may vary,
            options and/or accessories may be featured at additional cost.
          </p>
        </div>
      </Show>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-4">
          <SelectionFooter currentStepIndex={currentStepIndex} />
        </div>
        <div className="flex-shrink-0 space-x-2">
          <button
            type="button"
            onClick={onClickBack}
            className="px-4 py-2 border border-gray-300 rounded font-medium text-md text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Back
          </button>
          <button
            type="button"
            onClick={onClickContinue}
            className="px-4 py-2 rounded text-md font-medium bg-black text-white hover:bg-gray-900 transition-colors cursor-pointer"
          >
            Continue
          </button>
        </div>
      </div>
    </footer>
  );
}
