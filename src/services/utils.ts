import { STEPS } from "../constants/Steps";

export const getStepKey = (stepIndex: number): string => {
  return STEPS[stepIndex].key || "";
};

export function formatPrice(priceBeforeVat: number, vat: number): string {
  return (priceBeforeVat * (1 + vat / 100)).toFixed(0);
}
