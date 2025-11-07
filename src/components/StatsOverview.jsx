import { Activity, Flame, Moon, Droplets } from "lucide-react";

const StatCard = ({ icon: Icon, label, value, unit, hint }) => (
  <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
    <div className="flex items-center gap-3 mb-3">
      <div className="h-9 w-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
        <Icon className="h-5 w-5" />
      </div>
      <span className="text-sm text-gray-500">{label}</span>
    </div>
    <div className="flex items-baseline gap-2">
      <span className="text-2xl font-semibold text-gray-900">{value}</span>
      {unit && <span className="text-sm text-gray-400">{unit}</span>}
    </div>
    {hint && <p className="text-xs text-gray-500 mt-2">{hint}</p>}
  </div>
);

export default function StatsOverview({ stats }) {
  const cards = [
    { icon: Activity, label: "Steps", value: stats.steps.toLocaleString(), unit: "", hint: "Goal 10,000" },
    { icon: Flame, label: "Calories", value: stats.calories, unit: "kcal", hint: "Includes active burn" },
    { icon: Droplets, label: "Water", value: stats.water, unit: "L", hint: "Stay hydrated" },
    { icon: Moon, label: "Sleep", value: stats.sleep, unit: "h", hint: "Aim for 7-9h" },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((c, idx) => (
        <StatCard key={idx} {...c} />
      ))}
    </section>
  );
}
