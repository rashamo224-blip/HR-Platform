import { Card } from "@/components/ui/card";

const widgets = ["Total Employees","Active vs Inactive","Pending Requests","Employees on Leave Today","Payroll Summary","Alerts (Action Required)","Company Updates"];

export default function DashboardPage() {
  return <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{widgets.map((w) => <Card key={w}><p className="text-sm text-slate-500">{w}</p><p className="mt-2 text-2xl font-semibold">—</p></Card>)}</div>;
}
