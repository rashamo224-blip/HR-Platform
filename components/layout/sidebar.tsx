import Link from "next/link";

const items = ["Dashboard","Employees","Leave Tracking","Requests","Performance","Training","Payroll","Tools","Communication","Alerts"];

export function Sidebar() {
  return (
    <aside className="min-h-screen w-64 bg-brand-navy p-5 text-white">
      <div className="mb-8 rounded-2xl border border-white/20 p-4 text-center font-semibold">Equivator</div>
      <nav className="space-y-2">
        {items.map((item) => (
          <Link key={item} href={`/${item.toLowerCase().replace(/ /g, "-")}`} className="block rounded-xl px-3 py-2 text-sm hover:bg-white/10">{item}</Link>
        ))}
      </nav>
    </aside>
  );
}
