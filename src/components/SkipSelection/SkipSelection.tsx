import { useContext, useRef, useEffect, useCallback } from "react";
import SkipCard from "../SkipCard/SkipCard";
import StepFooter from "../StepFooter/StepFooter";
import Show from "../Show";
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

  // Ref for the selected skip card
  const selectedSkipRef = useRef<HTMLDivElement | null>(null);

  // Scroll to the selected skip card if it's not fully visible
  useEffect(() => {
    if (!isLoading && skipSelected && selectedSkipRef.current) {
      const rect = selectedSkipRef.current.getBoundingClientRect();
      const isFullyVisible =
        rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight);

      if (!isFullyVisible) {
        selectedSkipRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, [isLoading, skipSelected]);

  // Memoized handler to avoid unnecessary re-renders
  const handleSelectSkip = useCallback(
    (skip: Skip) => {
      if (skipSelected?.id === skip.id) {
        dispatch({ type: CLEAR_SKIP });
      } else {
        dispatch({ type: SELECT_SKIP, payload: { skip } });
      }
    },
    [dispatch, skipSelected]
  );

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

      <Show ifCondition={isLoading}>
        <div className="flex justify-center py-16">
          <span className="text-gray-500">Loading skips...</span>
        </div>
      </Show>

      <Show ifCondition={!!error}>
        <div className="flex justify-center py-16">
          <span className="text-red-500">Error: {error?.message}</span>
        </div>
      </Show>

      <Show ifCondition={!isLoading && !error}>
        <Show ifCondition={skips.length > 0}>
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skips.map((skip) => {
                const isSelected = skipSelected?.id === skip.id;
                return (
                  <div
                    key={skip.id}
                    ref={isSelected ? selectedSkipRef : undefined}
                  >
                    <SkipCard
                      skip={skip}
                      isSelected={isSelected}
                      onSelect={handleSelectSkip}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </Show>
        <Show ifCondition={skips.length === 0}>
          <div className="flex justify-center py-16">
            <span className="text-gray-500">
              No skips available for this location.
            </span>
          </div>
        </Show>
      </Show>

      <Show ifCondition={!!skipSelected}>
        <StepFooter />
      </Show>
    </div>
  );
}
