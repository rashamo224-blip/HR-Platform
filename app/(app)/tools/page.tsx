import { Section } from "@/components/modules/section";
import { DataTable } from "@/components/ui/table";
export default function ToolsPage(){return <Section title="Tools"><DataTable headers={["Tool","Cost","Users","Status"]} rows={[["Bloomberg","High","12","Active"],["HR Portal","Medium","67","Active"]]} /></Section>;}
