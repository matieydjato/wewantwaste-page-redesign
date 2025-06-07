import { useContext } from "react";
import SkipCard from "../SkipCard";
import StepFooter from "../StepFooter/StepFooter";
import { useSkipsByLocation } from "../../hooks";
import { SkipHireContext } from "../../contexts";
import { SELECT_SKIP, CLEAR_SKIP } from "../../constants/ActionTypes";
import type { Skip } from "../../types/Skip";

export default function SkipSelection() {
  const { state, dispatch } = useContext(SkipHireContext)!;
  const { skipSelected, postcode, area } = state;
  const {
    data: skips = [],
    isLoading,
    error,
  } = useSkipsByLocation(postcode, area);

  const handleSelectSkip = (skip: Skip) => {
    if (skipSelected?.id === skip.id) {
      dispatch({ type: CLEAR_SKIP });
    } else {
      dispatch({ type: SELECT_SKIP, payload: { skip } });
    }
  };

  const containerClasses = skipSelected ? "pb-50 md:pb-30" : "pb-10";

  return (
    <div className={containerClasses}>
      <header className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-gray-800">
          Choose Your Skip Size
        </h2>
        <p className="mt-1 text-lg text-gray-600">
          Select the skip size that best suits your needs
        </p>
      </header>

      {isLoading && (
        <div className="flex justify-center py-16">
          <span className="text-gray-500">Loading skips...</span>
        </div>
      )}

      {error && (
        <div className="flex justify-center py-16">
          <span className="text-red-500">Error: {error.message}</span>
        </div>
      )}

      {!isLoading && !error && (
        <>
          {skips.length > 0 ? (
            <div className="w-full max-w-6xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skips.map((skip) => (
                  <SkipCard
                    key={skip.id}
                    skip={skip}
                    isSelected={skipSelected?.id === skip.id}
                    onSelect={handleSelectSkip}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="flex justify-center py-16">
              <span className="text-gray-500">
                No skips available for this location.
              </span>
            </div>
          )}
        </>
      )}

      {skipSelected && <StepFooter />}
    </div>
  );
}
