import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function DataTable({ headers, rows, className }: { headers: string[]; rows: ReactNode[][]; className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-2xl bg-white shadow-card", className)}>
      <table className="w-full text-left text-sm">
        <thead className="bg-brand-cloud text-brand-slate">
          <tr>{headers.map((header) => <th key={header} className="px-4 py-3 font-semibold">{header}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-slate-100 hover:bg-slate-50">
              {row.map((cell, j) => <td key={j} className="px-4 py-3">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
