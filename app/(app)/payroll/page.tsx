import { Section } from "@/components/modules/section";
import { DataTable } from "@/components/ui/table";
export default function PayrollPage(){return <Section title="Payroll"><DataTable headers={["Employee","Salary","Deductions","Net"]} rows={[["Nora Al-Harbi","42,000 SAR","3,200 SAR","38,800 SAR"],["Faisal Al-Qahtani","22,000 SAR","1,200 SAR","20,800 SAR"]]} /><p className="mt-3 text-sm text-slate-600">Employee payslip downloads are available per profile.</p></Section>;}
