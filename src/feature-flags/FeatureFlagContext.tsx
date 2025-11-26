import { createContext, useContext, useState } from "react";
import type { FeatureFlags } from "../featureFlags";

type FeatureFlagContextValue = {
  flags: FeatureFlags;
  toggleFlag: (key: keyof FeatureFlags) => void;
};

const FeatureFlagContext = createContext<FeatureFlagContextValue | null>(null);

const defaultFlags: FeatureFlags = {
  newDashboard: false,
  betaBanner: false,
};

export function FeatureFlagProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [flags, setFlags] = useState<FeatureFlags>(() => {
  const stored = localStorage.getItem("featureFlags");
  return stored ? JSON.parse(stored) : defaultFlags;
});


  const toggleFlag = (key: keyof FeatureFlags) => {
    setFlags((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
    localStorage.setItem("featureFlags", JSON.stringify(flags));
  };
  

  return (
    <FeatureFlagContext.Provider value={{ flags, toggleFlag }}>
      {children}
    </FeatureFlagContext.Provider>
  );
}

export function useFeatureFlags() {
  const context = useContext(FeatureFlagContext);
  if (!context) {
    throw new Error("useFeatureFlags must be used within FeatureFlagProvider");
  }
  return context;
}
