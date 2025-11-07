import { useState } from "react";
import { Plus, CheckCircle2 } from "lucide-react";

export default function DailyLog({ onAdd }) {
  const [entry, setEntry] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    const trimmed = entry.trim();
    if (!trimmed) return;
    const newItem = { id: Date.now(), text: trimmed, done: false };
    setItems((prev) => [newItem, ...prev]);
    setEntry("");
    onAdd?.(newItem);
  };

  const toggle = (id) => {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, done: !it.done } : it)));
  };

  return (
    <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Daily Log</h2>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <input
          type="text"
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="Add a note (e.g., 20-min walk, salad for lunch)"
          className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
        />
        <button
          onClick={addItem}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-3 py-2 rounded-lg shadow-sm"
        >
          <Plus className="h-4 w-4" />
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {items.length === 0 && (
          <li className="text-sm text-gray-500">No entries yet. Start by adding something!</li>
        )}
        {items.map((it) => (
          <li
            key={it.id}
            className="flex items-center justify-between rounded-lg border border-gray-100 px-3 py-2 bg-white hover:bg-gray-50"
          >
            <span className={`text-sm ${it.done ? "line-through text-gray-400" : "text-gray-700"}`}>
              {it.text}
            </span>
            <button
              onClick={() => toggle(it.id)}
              className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-md border ${
                it.done
                  ? "bg-green-50 text-green-700 border-green-200"
                  : "bg-gray-50 text-gray-600 border-gray-200"
              }`}
            >
              <CheckCircle2 className="h-4 w-4" /> {it.done ? "Done" : "Mark"}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
