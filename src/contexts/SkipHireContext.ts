import { createContext, type Context } from "react";
import type { SkipHireContextType } from "./types";

export const SkipHireContext: Context<SkipHireContextType | null> =
  createContext<SkipHireContextType | null>(null);
