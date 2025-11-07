import { useMemo, useState } from "react";
import Header from "./components/Header";
import StatsOverview from "./components/StatsOverview";
import DailyLog from "./components/DailyLog";
import GoalSetter from "./components/GoalSetter";

function App() {
  const [goals, setGoals] = useState({ steps: 8000, water: 2.5, sleep: 8 });
  const [logItems, setLogItems] = useState([]);

  const today = useMemo(() => new Date().toLocaleDateString(undefined, {
    weekday: "short", year: "numeric", month: "short", day: "numeric",
  }), []);

  const stats = {
    steps: 6234,
    calories: 1740,
    water: 1.8,
    sleep: 7.2,
  };

  const handleAddLog = (item) => setLogItems((prev) => [item, ...prev]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Header dateString={today} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <StatsOverview stats={stats} />
            <DailyLog onAdd={handleAddLog} />
          </div>
          <div className="space-y-6">
            <GoalSetter initialGoals={goals} onChange={setGoals} />
            <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
              <ul className="space-y-2">
                {logItems.length === 0 && (
                  <li className="text-sm text-gray-500">No recent activity yet.</li>
                )}
                {logItems.map((it) => (
                  <li key={it.id} className="text-sm text-gray-700">
                    • {it.text}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
