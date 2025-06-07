import { useContext, useMemo } from "react";
import { SkipHireContext } from "../../contexts";

export default function SkipComponent() {
  const { state } = useContext(SkipHireContext)!;
  const { skipSelected } = state;

  const priceWithVat = useMemo(() => {
    if (!skipSelected) return null;
    return (
      skipSelected.price_before_vat *
      (1 + skipSelected.vat / 100)
    ).toFixed(0);
  }, [skipSelected]);

  if (!skipSelected) return null;

  return (
    <div
      className="flex flex-col items-start space-y-2
+        md:flex-row md:items-baseline md:space-y-0 md:space-x-4"
    >
      <span className="mr-4 text-md font-medium text-gray-700">
        {skipSelected.size} Yard Skip
      </span>
      <span className="mr-1 text-3xl font-semibold text-black">
        £{priceWithVat}
      </span>
      <span className="text-md text-gray-500">
        {skipSelected.hire_period_days}-day hire
      </span>
    </div>
  );
}
