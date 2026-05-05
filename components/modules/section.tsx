import { ReactNode } from "react";

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      <h1 className="text-xl font-semibold text-brand-navy">{title}</h1>
      {children}
    </section>
  );
}
