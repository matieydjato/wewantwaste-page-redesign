import { useContext } from "react";
import { SkipHireContext } from "../contexts";

export default function StepContent() {
  const { state } = useContext(SkipHireContext)!;
  const { currentStepIndex } = state;

  switch (currentStepIndex) {
    case 0:
      return <div>PostCode</div>;

    case 1:
      return <div>Waste Type</div>;

    case 2:
      return <div>Select Skip</div>;

    case 3:
      return <div>Permit Check</div>;

    case 4:
      return <div>Choose Date</div>;

    case 5:
      return <div>Payment</div>;

    default:
      return <div>PostCode</div>;
  }
}
