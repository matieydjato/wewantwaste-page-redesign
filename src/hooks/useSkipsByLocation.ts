import { useQuery } from "@tanstack/react-query";
import { getSkipsByLocation } from "../services/SkipsService";
import type { Skip } from "../types/Skip";

export const useSkipsByLocation = (postcode: string, area: string) => {
  return useQuery<Skip[], Error>({
    queryKey: ["skips", postcode, area],
    queryFn: () => getSkipsByLocation(postcode, area),
    enabled: Boolean(postcode && area),
    staleTime: 1000 * 60 * 5,
  });
};
