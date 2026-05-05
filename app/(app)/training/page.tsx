import { Section } from "@/components/modules/section";
import { Card } from "@/components/ui/card";
const stages=["Requested","Manager Approved","HR Approved","CEO Approved"];
export default function TrainingPage(){return <Section title="Training Pipeline"><div className="grid gap-4 md:grid-cols-4">{stages.map((s)=><Card key={s}><p className="font-semibold">{s}</p></Card>)}</div></Section>;}
