import { useState } from "react";
import { Target } from "lucide-react";

export default function GoalSetter({ initialGoals = { steps: 8000, water: 2.5, sleep: 8 }, onChange }) {
  const [goals, setGoals] = useState(initialGoals);

  const update = (key, value) => {
    const next = { ...goals, [key]: value };
    setGoals(next);
    onChange?.(next);
  };

  return (
    <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-8 w-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
          <Target className="h-4 w-4" />
        </div>
        <h2 className="text-lg font-semibold text-gray-900">Goals</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs text-gray-500 mb-1">Daily Steps</label>
          <input
            type="number"
            value={goals.steps}
            onChange={(e) => update("steps", Number(e.target.value))}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            min={0}
          />
        </div>
        <div>
          <label className="block text-xs text-gray-500 mb-1">Water (L)</label>
          <input
            type="number"
            step="0.1"
            value={goals.water}
            onChange={(e) => update("water", Number(e.target.value))}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            min={0}
          />
        </div>
        <div>
          <label className="block text-xs text-gray-500 mb-1">Sleep (h)</label>
          <input
            type="number"
            step="0.5"
            value={goals.sleep}
            onChange={(e) => update("sleep", Number(e.target.value))}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            min={0}
          />
        </div>
      </div>
    </section>
  );
}
