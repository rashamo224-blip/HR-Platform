import { notFound } from "next/navigation";
import { Section } from "@/components/modules/section";
import { Card } from "@/components/ui/card";
import { employees } from "@/lib/mock-data";

const tabs = ["Overview", "Documents", "Leave", "Payroll", "Performance", "Training", "Requests", "Notes"];

export default async function EmployeeProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const employee = employees.find((item) => item.id === id);
  if (!employee) notFound();

  return (
    <Section title={`${employee.name} • ${employee.position}`}>
      <div className="grid gap-4 lg:grid-cols-4">
        {tabs.map((tab) => (
          <Card key={tab} className="p-4">
            <p className="text-sm font-semibold">{tab}</p>
            <p className="mt-1 text-xs text-slate-500">Structured employee operating data.</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
