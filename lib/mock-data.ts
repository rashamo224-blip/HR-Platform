import { Employee } from "@/types";

export const employees: Employee[] = [
  { id: "E-001", name: "Nora Al-Harbi", position: "VP Operations", department: "Operations", status: "Active", leaveBalance: 14, performanceScore: 94, lastActivity: "Policy review" },
  { id: "E-002", name: "Faisal Al-Qahtani", position: "Analyst", department: "Corporate Finance", status: "Active", leaveBalance: 8, performanceScore: 88, lastActivity: "Training submitted" },
  { id: "E-003", name: "Rakan Al-Dossari", position: "Associate", department: "Private Equity", status: "Inactive", leaveBalance: 6, performanceScore: 79, lastActivity: "On leave" },
  { id: "E-004", name: "Leena Al-Salem", position: "HR Manager", department: "People & Culture", status: "Active", leaveBalance: 16, performanceScore: 91, lastActivity: "Request approval" }
];

export const dashboardMetrics = [
  { label: "Total Employees", value: "67", delta: "+4 QoQ" },
  { label: "Active vs Inactive", value: "63 / 4", delta: "Stable" },
  { label: "Pending Requests", value: "19", delta: "-2 this week" },
  { label: "Employees on Leave Today", value: "5", delta: "+1 vs yesterday" },
  { label: "Payroll Summary", value: "SAR 2.1M", delta: "Apr 2026" },
  { label: "Alerts (Action Required)", value: "7", delta: "2 High severity" },
  { label: "Company Updates", value: "3", delta: "This week" }
];

export const policyKnowledgeBase = {
  annualLeave: {
    answer: "Full-time employees are eligible for annual leave after completing probation and confirmation.",
    source: "HR Policy Manual v2.4 — Section 3.2 (Annual Leave Eligibility)"
  },
  sickLeave: {
    answer: "Sick leave requires medical documentation for absences above two working days.",
    source: "HR Policy Manual v2.4 — Section 3.7 (Medical Leave)"
  }
};
