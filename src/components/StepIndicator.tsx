import React, { useContext } from "react";
import SvgIcon from "./SvgIcon";
import type { Stepper } from "../types/Stepper";
import { SkipHireContext } from "../contexts";
import { SET_STEP } from "../constants/ActionTypes";

type StepIndicatorProps = {
  steps: Stepper[];
};

export default function StepIndicator({ steps }: StepIndicatorProps) {
  const { state, dispatch } = useContext(SkipHireContext)!;
  const { currentStepIndex } = state;

  return (
    <nav className="bg-white py-7">
      <ul className="max-w-6xl mx-auto flex flex-col items-start px-4 sm:px-6 lg:px-8">
        {steps.map((step, idx) => {
          const isActive = idx === currentStepIndex;
          const isCompleted = idx < currentStepIndex;
          const isClickable = idx <= currentStepIndex;
          const iconNameToRender = isCompleted ? "CheckMark" : step.iconName;
          const cursorClass = isClickable
            ? "cursor-pointer"
            : "cursor-not-allowed";

          return (
            <React.Fragment key={step.key}>
              {/* Chaque étape : cercle + label (masqué sur <md) */}
              <li
                className={`flex items-center lg:space-x-2 ${cursorClass}`}
                onClick={() => {
                  if (isClickable) {
                    dispatch({
                      type: SET_STEP,
                      payload: { step: idx },
                    });
                  }
                }}
              >
                <div
                  className={`
                    w-8 h-8 flex items-center justify-center rounded-full
                    ${isCompleted ? "bg-black text-white" : ""}
                    ${
                      !isCompleted && isActive
                        ? "bg-white border-2 border-black text-blue-600"
                        : ""
                    }
                    ${
                      !isCompleted && !isActive
                        ? "bg-gray-200 text-gray-500"
                        : ""
                    }
                  `}
                >
                  <SvgIcon
                    name={iconNameToRender}
                    className={`
                      w-5 h-5
                      ${isCompleted ? "filter brightness-0 invert" : ""}
                      ${
                        !isCompleted && isActive
                          ? "filter brightness-0 text-blue-600"
                          : ""
                      }
                      ${
                        !isCompleted && !isActive
                          ? "filter brightness-0 text-gray-500"
                          : ""
                      }
                    `}
                  />
                </div>

                <span
                  className={`
                    hidden lg:inline-block    /* caché en dessous de md, visible à partir de md */
                    text-sm font-medium
                    ${
                      isCompleted || isActive
                        ? "text-gray-900"
                        : "text-gray-400"
                    }
                  `}
                >
                  {step.label}
                </span>
              </li>

              {/* Trait vertical entre chaque étape (couleur selon idx < currentStepIndex) */}
              {idx < steps.length - 1 && (
                <div
                  className={`
                    ml-4            /* aligne le trait sous le cercle (1/2 de 8 = 4) */
                    w-px           /* largeur 1px */
                    h-8            /* hauteur 2rem (= 8 unités Tailwind) */
                    ${idx < currentStepIndex ? "bg-black" : "bg-gray-200"}
                  `}
                />
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </nav>
  );
}
