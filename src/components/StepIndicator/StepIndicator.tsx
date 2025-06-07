import React, { useContext, useCallback } from "react";
import SvgIcon from "../SvgIcon";
import Show from "../Show";
import { SkipHireContext } from "../../contexts/SkipHireContext";
import { SET_STEP } from "../../constants/ActionTypes";
import type { Stepper } from "../../types/Stepper";
import { getIconClasses, getStepClasses } from "./StepIndicator.utils";

type StepIndicatorProps = {
  steps: Stepper[];
};

export default function StepIndicator({ steps }: StepIndicatorProps) {
  const { state, dispatch } = useContext(SkipHireContext)!;
  const { currentStepIndex } = state;

  const handleStepClick = useCallback(
    (idx: number, isClickable: boolean) => {
      if (isClickable) {
        dispatch({ type: SET_STEP, payload: { step: idx } });
      }
    },
    [dispatch]
  );

  return (
    <nav className="bg-white py-7" aria-label="Progress">
      <ul className="max-w-6xl mx-auto flex flex-col items-start px-4 sm:px-6 lg:px-8">
        {steps.map((step, idx) => {
          const isActive = idx === currentStepIndex;
          const isCompleted = idx < currentStepIndex;
          const isClickable = idx <= currentStepIndex;
          const iconName = isCompleted ? "CheckMark" : step.iconName;

          return (
            <React.Fragment key={step.key}>
              <li className={`flex items-center lg:space-x-2`}>
                <button
                  type="button"
                  className={`flex items-center lg:space-x-2 ${
                    isClickable ? "cursor-pointer" : "cursor-not-allowed"
                  }`}
                  onClick={() => handleStepClick(idx, isClickable)}
                >
                  <div className={getStepClasses(isCompleted, isActive)}>
                    <SvgIcon
                      name={iconName}
                      className={getIconClasses(isCompleted, isActive)}
                    />
                  </div>
                  <span
                    className={`hidden lg:inline-block text-md font-medium ${
                      isCompleted || isActive
                        ? "text-gray-900"
                        : "text-gray-400"
                    }`}
                  >
                    {step.label}
                  </span>
                </button>
              </li>
              <Show ifCondition={idx < steps.length - 1}>
                <div
                  className={`ml-4 w-px h-8 ${
                    idx < currentStepIndex ? "bg-black" : "bg-gray-200"
                  }`}
                  aria-hidden="true"
                />
              </Show>
            </React.Fragment>
          );
        })}
      </ul>
    </nav>
  );
}
