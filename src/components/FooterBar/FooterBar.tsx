import { useContext } from "react";
import { SkipHireContext } from "../../contexts";
import SelectedSkipView from "./SelectedSkipView";
import { NEXT_STEP, PREV_STEP } from "../../constants/ActionTypes";

const renderDetailsView = (currentStepIndex: number) => {
  switch (currentStepIndex) {
    case 1:
      return <div>Waste Type Selected View</div>;

    case 2:
      return (
        <div>
          <SelectedSkipView />
        </div>
      );

    default:
      return <div>No item selected</div>;
  }
};

export default function FooterBar() {
  const { state, dispatch } = useContext(SkipHireContext)!;
  const { currentStepIndex } = state;

  const onClickBack = () => {
    dispatch({ type: PREV_STEP });
  };

  const onClickContinue = () => {
    dispatch({ type: NEXT_STEP });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-inner border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 pt-3 text-center">
        <p className="text-xs text-gray-500">
          Imagery and information shown throughout this website may not reflect
          the exact shape or size specification, colours may vary, options
          and/or accessories may be featured at additional cost.
        </p>
      </div>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-4">
          {renderDetailsView(currentStepIndex)}
        </div>

        <div className="flex-shrink-0 space-x-2">
          <button
            onClick={onClickBack}
            className="px-4 py-2 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            Back
          </button>
          <button
            onClick={onClickContinue}
            className={`px-4 py-2 rounded text-sm font-medium transition-colors bg-black text-white cursor-pointer`}
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
}
