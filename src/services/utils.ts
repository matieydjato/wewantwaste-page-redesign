import { STEPS } from "../constants/Steps";

export const getStepKey = (stepIndex: number): string => {
  return STEPS[stepIndex].key || "";
};
