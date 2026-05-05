import { Card } from "@/components/ui/card";
import { dashboardMetrics } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {dashboardMetrics.map((metric) => (
        <Card key={metric.label}>
          <p className="text-sm text-slate-500">{metric.label}</p>
          <p className="mt-2 text-2xl font-semibold">{metric.value}</p>
          <p className="mt-1 text-xs text-slate-500">{metric.delta}</p>
        </Card>
      ))}
    </div>
  );
}
