import type { Stepper } from "../types/Stepper.ts";

export const STEPS: Stepper[] = [
  { key: "postcode", label: "Postcode", iconName: "Postcode" },
  { key: "wasteType", label: "Waste Type", iconName: "WasteType" },
  { key: "selectSkip", label: "Select Skip", iconName: "SelectSkip" },
  { key: "permitCheck", label: "Permit Check", iconName: "PermitCheck" },
  { key: "chooseDate", label: "Choose Date", iconName: "ChooseDate" },
  { key: "payment", label: "Payment", iconName: "Payment" },
];
