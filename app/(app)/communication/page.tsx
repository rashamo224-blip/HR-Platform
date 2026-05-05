import { Section } from "@/components/modules/section";
import { Card } from "@/components/ui/card";
const feed=["Announcement","New Joiner","Birthday","Recognition","Promotion","Payroll Alert","Reminder"];
export default function CommunicationPage(){return <Section title="Communication Hub"><div className="space-y-3">{feed.map((f)=><Card key={f}><p className="font-semibold">{f}</p><p className="text-sm text-slate-600">Automation-ready feed item.</p></Card>)}</div></Section>;}
