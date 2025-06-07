import React, { useMemo } from "react";
import { getStepKey } from "../../services/utils";
import SkipComponent from "./SkipComponent";

const componentMap: Record<string, React.ReactNode> = {
  wasteType: <div>Waste Selected</div>,
  selectSkip: <SkipComponent />,
};

export const SelectionFooter = React.memo(
  ({ currentStepIndex }: { currentStepIndex: number }) => {
    const stepKey = useMemo(
      () => getStepKey(currentStepIndex),
      [currentStepIndex]
    );

    return <>{componentMap[stepKey] ?? <div>No item selected</div>}</>;
  }
);
