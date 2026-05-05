import { Section } from "@/components/modules/section";
import { Card } from "@/components/ui/card";
const stages=["Pending","Approved","Rejected"];
export default function LeavePage(){return <Section title="Leave Tracking"><div className="grid gap-4 md:grid-cols-3">{stages.map((s)=><Card key={s}><p className="font-semibold">{s}</p><p className="mt-3 text-sm text-slate-600">Employee, leave type, dates, duration</p></Card>)}</div></Section>;}
