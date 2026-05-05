import { Section } from "@/components/modules/section";
import { DataTable } from "@/components/ui/table";
import { employees } from "@/lib/mock-data";

export default function EmployeesPage() {
  return <Section title="Employees"><DataTable headers={["Name","Position","Department","Status","Leave Balance","Performance Score","Last Activity"]} rows={employees.map((e)=>[e.name,e.position,e.department,e.status,e.leaveBalance,e.performanceScore,e.lastActivity])} /></Section>;
}
