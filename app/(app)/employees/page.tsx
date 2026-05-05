import Link from "next/link";
import { Section } from "@/components/modules/section";
import { DataTable } from "@/components/ui/table";
import { employees } from "@/lib/mock-data";

export default function EmployeesPage() {
  return (
    <Section title="Employees">
      <DataTable
        headers={["Name", "Position", "Department", "Status", "Leave Balance", "Performance Score", "Last Activity"]}
        rows={employees.map((e) => [
          <Link key={e.id} href={`/employees/${e.id}`} className="font-medium text-brand-slate underline-offset-4 hover:underline">{e.name}</Link>,
          e.position,
          e.department,
          e.status,
          `${e.leaveBalance} days`,
          e.performanceScore,
          e.lastActivity
        ])}
      />
    </Section>
  );
}
