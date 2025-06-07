import React, { useCallback, useMemo } from "react";
import Show from "../Show";
import type { Skip } from "../../types/Skip";
import {
  getImageUrl,
  getContainerClasses,
  getButtonClasses,
} from "./SkipCard.utils";
import { formatPrice } from "../../services/utils";

type SkipCardProps = {
  skip: Skip;
  isSelected: boolean;
  onSelect: (skip: Skip) => void;
};

function SkipCard({ skip, isSelected, onSelect }: SkipCardProps) {
  const { size, price_before_vat, vat, allowed_on_road, hire_period_days } =
    skip;

  const imageUrl = useMemo(() => getImageUrl(size), [size]);
  const containerClasses = useMemo(
    () => getContainerClasses(isSelected),
    [isSelected]
  );
  const buttonClasses = useMemo(
    () => getButtonClasses(isSelected),
    [isSelected]
  );
  const priceWithVat = useMemo(
    () => formatPrice(price_before_vat, vat),
    [price_before_vat, vat]
  );

  const handleSelectSkip = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      onSelect(skip);
    },
    [onSelect, skip]
  );

  return (
    <div role="button" className={containerClasses} onClick={handleSelectSkip}>
      <div className="relative h-44 w-full px-5 pt-5">
        <img
          src={imageUrl}
          alt={`${size} Yard Skip`}
          className="object-cover h-full w-full transition-transform duration-200 group-hover:scale-105 rounded-lg"
          loading="lazy"
        />
        <span className="absolute top-7 left-7 px-3 py-1 text-xs font-bold rounded-full shadow bg-gray-900 text-white">
          {size} yd³
        </span>
        <Show ifCondition={!allowed_on_road}>
          <span className="absolute top-3 right-3 px-2 py-1 text-xs font-semibold rounded bg-yellow-400 text-gray-900 shadow">
            Not Allowed On Road
          </span>
        </Show>
      </div>

      <div className="flex-1 flex flex-col justify-between p-5 space-y-2">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-1">
            {size} Yard Skip
          </h3>
          <p className="text-sm text-gray-500 mb-2">
            {hire_period_days} day hire
          </p>
        </div>

        <div className="flex items-end justify-between mt-2">
          <span className="text-2xl font-extrabold text-black">
            £{priceWithVat}
          </span>
          <button
            type="button"
            onClick={handleSelectSkip}
            className={buttonClasses}
            aria-label={isSelected ? "Deselect this skip" : "Select this skip"}
          >
            {isSelected ? "Selected" : "Select"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(SkipCard);
