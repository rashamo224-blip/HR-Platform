export type Role = "super_admin" | "hr_admin" | "employee";

export interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  status: "Active" | "Inactive";
  leaveBalance: number;
  performanceScore: number;
  lastActivity: string;
}
