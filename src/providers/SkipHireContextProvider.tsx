import { type ReactNode, useMemo, useReducer } from "react";
import { SkipHireContext } from "../contexts";
import { skipReducer } from "../reducers";
import type { SkipHireState } from "../contexts/types.ts";

type SkipProviderProps = { children: ReactNode };

const initialState: SkipHireState = {
  currentStepIndex: 2,
  skipSelected: null,
};

export default function SkipHireContextProvider({
  children,
}: SkipProviderProps) {
  const [state, dispatch] = useReducer(skipReducer, initialState);

  const reducerMemo = useMemo(() => ({ dispatch, state }), [state]);

  return (
    <SkipHireContext.Provider value={reducerMemo}>
      {children}
    </SkipHireContext.Provider>
  );
}
