import { Calendar, Heart } from "lucide-react";

export default function Header({ dateString }) {
  return (
    <header className="w-full flex items-center justify-between mb-8">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center shadow-inner">
          <Heart className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Health Tracker</h1>
          <p className="text-sm text-gray-500">Light, clean, and focused on your daily wellbeing</p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-gray-600 bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm">
        <Calendar className="h-4 w-4" />
        <span className="text-sm font-medium">{dateString}</span>
      </div>
    </header>
  );
}
