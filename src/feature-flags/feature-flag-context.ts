import { createContext } from "react";
import type { FeatureFlags } from "../feature-flags";

export type FeatureFlagContextValue = {
  flags: FeatureFlags;
  toggleFlag: (key: keyof FeatureFlags) => void;
};

export const FeatureFlagContext = createContext<FeatureFlagContextValue | null>(
  null
);
