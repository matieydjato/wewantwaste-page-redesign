import { useContext, type ComponentType } from "react";
import { SkipHireContext } from "../contexts";
import SkipSelection from "./SkipSelection/SkipSelection";

function PostcodeStep() {
  return <div>Postcode</div>;
}
function WasteTypeStep() {
  return <div>Waste Type</div>;
}
function PermitCheckStep() {
  return <div>Permit Check</div>;
}
function ChooseDateStep() {
  return <div>Choose Date</div>;
}
function PaymentStep() {
  return <div>Payment</div>;
}

// Maps each step index to its corresponding component
const stepComponents: ComponentType[] = [
  PostcodeStep,
  WasteTypeStep,
  SkipSelection,
  PermitCheckStep,
  ChooseDateStep,
  PaymentStep,
];

export default function StepContent() {
  const { state } = useContext(SkipHireContext)!;
  const { currentStepIndex } = state;

  // Selects the component for the current step, defaults to the first step if index is invalid
  const Step = stepComponents[currentStepIndex] ?? stepComponents[0];

  return <Step />;
}
