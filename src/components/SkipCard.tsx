import type { Skip } from "../types/Skip";

type SkipCardProps = {
  skip: Skip;
  isSelected: boolean;
  onSelect: (skip: Skip) => void;
};

export default function SkipCard({
  skip,
  isSelected,
  onSelect,
}: SkipCardProps) {
  const priceWithVat = (skip.price_before_vat * (1 + skip.vat / 100)).toFixed(
    0
  );

  return (
    <div
      className={`
        relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:-translate-y-1 cursor-pointer
        ${isSelected ? "ring-4 ring-blue-600" : "ring-1 ring-gray-200"}
      `}
      onClick={() => onSelect(skip)} // Entire card is now clickable
    >
      {/* Skip Image */}
      <div className="relative h-40 bg-gray-100">
        <img
          src={`https://app.wewantwaste.co.uk/media/skips/${skip.id}.jpg`}
          alt={`${skip.size} Yard Skip`}
          className="w-full h-full object-cover"
        />
        <span
          className={`
            absolute top-2 right-2 px-2 py-1 text-xs font-semibold rounded-full
            ${isSelected ? "bg-blue-600 text-white" : "bg-gray-800 text-white"}
          `}
        >
          {skip.size} yd³
        </span>
      </div>

      {/* Text Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">
          {skip.size} Yard Skip
        </h3>
        <p className="text-sm text-gray-500">
          {skip.hire_period_days} day hire
        </p>
        <p className="text-xl font-bold text-blue-600">£{priceWithVat}</p>
      </div>

      {/* Select / Unselect Button */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent the parent div’s onClick from double-firing
          onSelect(skip);
        }}
        className={`
          w-full py-3 text-sm font-medium rounded-b-lg transition-colors
          ${
            isSelected
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }
        `}
      >
        {isSelected ? "Selected" : "Select This Skip →"}
      </button>

      {/* “Not Allowed on Road” Banner */}
      {!skip.allowed_on_road && (
        <div className="absolute bottom-16 left-0 w-full bg-yellow-500 text-center text-xs text-gray-900 py-1">
          Not Allowed On The Road
        </div>
      )}
    </div>
  );
}
