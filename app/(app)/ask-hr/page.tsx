import { Section } from "@/components/modules/section";
import { Card } from "@/components/ui/card";
import { policyKnowledgeBase } from "@/lib/mock-data";

export default function AskHRPage() {
  const response = policyKnowledgeBase.annualLeave;
  return (
    <Section title="Ask HR">
      <Card>
        <p className="font-semibold">Policy Assistant</p>
        <p className="mt-2 text-sm text-slate-600">Answers are restricted to approved policies with explicit source citation.</p>
        <div className="mt-3 rounded-xl border border-slate-200 p-3 text-sm">
          <p className="font-medium">Q: What is annual leave eligibility?</p>
          <p className="mt-2">A: {response.answer}</p>
          <p className="mt-2 text-xs text-slate-500">Source: {response.source}</p>
        </div>
      </Card>
    </Section>
  );
}
