import { Section } from "@/components/modules/section";
import { DataTable } from "@/components/ui/table";
export default function RequestsPage(){return <Section title="Requests"><DataTable headers={["Employee","Request Type","Status","Date","Next Step"]} rows={[["Nora Al-Harbi","Equipment","HR Review","2026-05-03","Final approval"],["Faisal Al-Qahtani","Travel","Manager Review","2026-05-04","Manager notes"]]} /></Section>;}
