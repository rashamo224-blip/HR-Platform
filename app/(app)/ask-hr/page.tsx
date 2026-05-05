import { Section } from "@/components/modules/section";
import { Card } from "@/components/ui/card";
export default function AskHRPage(){return <Section title="Ask HR"><Card><p className="font-semibold">Policy Assistant</p><p className="mt-2 text-sm text-slate-600">Answers are constrained to policy knowledge base with source references.</p><div className="mt-3 rounded-xl border border-slate-200 p-3 text-sm">Q: What is annual leave eligibility? <br/>A: According to HR Policy 3.2, full-time employees are eligible after probation.</div></Card></Section>;}
