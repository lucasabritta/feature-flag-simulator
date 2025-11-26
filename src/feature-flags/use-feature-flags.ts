import { useContext } from "react";
import { FeatureFlagContext } from "./feature-flag-context";

export function useFeatureFlags() {
  const context = useContext(FeatureFlagContext);

  if (!context) {
    throw new Error("useFeatureFlags must be used within FeatureFlagProvider");
  }

  return context;
}
