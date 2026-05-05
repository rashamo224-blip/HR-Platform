import { Section } from "@/components/modules/section";
import { DataTable } from "@/components/ui/table";
export default function AlertsPage(){return <Section title="Alerts"><DataTable headers={["Type","Employee","Issue","Severity","Action"]} rows={[["Compliance","Nora Al-Harbi","Missing signature","High","Review now"],["Leave","Rakan Al-Dossari","Balance mismatch","Medium","Validate"]]} /></Section>;}
