import { useContext } from "react";
import SkipCard from "../SkipCard";
import FooterBar from "../FooterBar/FooterBar";
import { SkipHireContext } from "../../contexts";
import { useSkipsByLocation } from "../../hooks";
import type { Skip } from "../../types/Skip";
import { SELECT_SKIP, CLEAR_SKIP } from "../../constants/ActionTypes";

export default function SkipSelection() {
  const { state, dispatch } = useContext(SkipHireContext)!;
  const { skipSelected } = state;

  const postcode = "LE10 1SH";
  const area = "Lowestoft";

  const { data: skips, isLoading, error } = useSkipsByLocation(postcode, area);

  const handleSelectSkip = (skip: Skip) => {
    if (skipSelected?.id === skip.id) {
      dispatch({ type: CLEAR_SKIP });
    } else {
      dispatch({ type: SELECT_SKIP, payload: { skip } });
    }
  };

  return (
    <div className="pb-24">
      <header className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Choose Your Skip Size
        </h2>
        <p className="mt-1 text-gray-600">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skips?.map((skip) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              isSelected={skipSelected?.id === skip.id}
              onSelect={handleSelectSkip}
            />
          ))}
        </div>
      )}
      {skipSelected && <FooterBar />}
    </div>
  );
}
