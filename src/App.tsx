import { useFeatureFlags } from "./feature-flags/FeatureFlagContext";
import { NewDashboard } from "./features/NewDashboard";

export default function App() {
  const { flags, toggleFlag } = useFeatureFlags();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Feature Flags Playground</h1>

      <h2>Flags</h2>
      <ul>
        <li>
          <label>
            <input
              type="checkbox"
              checked={flags.newDashboard}
              onChange={() => toggleFlag("newDashboard")}
            />
            newDashboard
          </label>
        </li>
      </ul>

      <hr />

      {flags.newDashboard && <NewDashboard />}
    </div>
  );
}
