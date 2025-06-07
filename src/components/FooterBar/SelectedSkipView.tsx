import { useContext } from "react";
import { SkipHireContext } from "../../contexts";

export default function SelectedSkipView() {
  const { state } = useContext(SkipHireContext)!;
  const { skipSelected } = state;

  if (!skipSelected) {
    return null;
  }

  const priceWithVat = (
    skipSelected.price_before_vat *
    (1 + skipSelected.vat / 100)
  ).toFixed(0);

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium text-gray-700">
        {skipSelected.size} yd³
      </span>
      <span className="text-lg font-semibold text-black">£{priceWithVat}</span>
      <span className="text-sm text-gray-500">
        {skipSelected.hire_period_days}-day hire
      </span>
    </div>
  );
}
