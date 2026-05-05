import { Section } from "@/components/modules/section";
import { DataTable } from "@/components/ui/table";
import { employees } from "@/lib/mock-data";
export default function PerformancePage(){return <Section title="Performance"><DataTable headers={["Employee","Score","Manager","Last Review"]} rows={employees.map((e)=>[e.name,e.performanceScore,"HR Committee","Q1 2026"])} /></Section>;}
