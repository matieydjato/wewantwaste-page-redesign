import { STEPS } from "../constants/Steps";

/**
 * Returns the key for a given step index from the STEPS array.
 * Returns an empty string if the key is not found.
 */
export const getStepKey = (stepIndex: number): string => {
  return STEPS[stepIndex].key || "";
};

/**
 * Calculates and formats the total price including VAT, rounded to the nearest integer.
 */
export function formatPrice(priceBeforeVat: number, vat: number): string {
  return (priceBeforeVat * (1 + vat / 100)).toFixed(0);
}
