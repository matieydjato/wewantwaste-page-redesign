import { type ReactNode, useEffect, useMemo, useReducer } from "react";
import { SkipHireContext } from "../contexts";
import { skipReducer } from "../reducers";
import type { SkipHireState } from "../contexts/types";
import type { Skip } from "../types/Skip";

type SkipProviderProps = { children: ReactNode };

const initialState: SkipHireState = {
  currentStepIndex: 2,
  skipSelected: null,
  postcode: "LE10 1SH",
  area: "Lowestoft",
};

export default function SkipHireContextProvider({
  children,
}: SkipProviderProps) {
  // Initialize state from localStorage if available, otherwise use initialState
  const [state, dispatch] = useReducer(skipReducer, initialState, (init) => {
    try {
      const stored = localStorage.getItem("selectedSkip");
      if (stored) {
        return { ...init, skipSelected: JSON.parse(stored) as Skip };
      }
    } catch {
      console.error(
        "Failed to parse skip from localStorage, using initial state."
      );
    }
    return init;
  });

  // Persist skipSelected to localStorage whenever it changes
  useEffect(() => {
    if (state.skipSelected) {
      localStorage.setItem("selectedSkip", JSON.stringify(state.skipSelected));
    } else {
      localStorage.removeItem("selectedSkip");
    }
  }, [state.skipSelected]);

  // Memoize context value to prevent unnecessary re-renders
  const reducerMemo = useMemo(() => ({ dispatch, state }), [state]);

  return (
    <SkipHireContext.Provider value={reducerMemo}>
      {children}
    </SkipHireContext.Provider>
  );
}
