import { Bell, Search } from "lucide-react";

export function Topbar() {
  return (
    <header className="mb-6 flex items-center justify-between rounded-2xl bg-white p-4 shadow-card">
      <div className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-500">
        <Search size={16} /> Search
      </div>
      <div className="flex items-center gap-4">
        <button className="rounded-xl bg-brand-cloud px-3 py-2 text-sm">Ask HR</button>
        <Bell size={18} className="text-brand-slate" />
        <button className="rounded-xl bg-brand-navy px-3 py-2 text-sm text-white">Profile</button>
      </div>
    </header>
  );
}
