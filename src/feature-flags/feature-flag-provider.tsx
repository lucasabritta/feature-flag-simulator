import { useState } from "react";
import { FeatureFlagContext } from "./feature-flag-context";
import type { FeatureFlags } from "../feature-flags";

const defaultFlags: FeatureFlags = {
  newDashboard: false,
  betaBanner: false,
};

export function FeatureFlagProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [flags, setFlags] = useState<FeatureFlags>(defaultFlags);

  const toggleFlag = (key: keyof FeatureFlags) => {
    setFlags((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <FeatureFlagContext.Provider value={{ flags, toggleFlag }}>
      {children}
    </FeatureFlagContext.Provider>
  );
}
