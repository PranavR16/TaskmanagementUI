export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  status: string;
  notes: string;
  attachmentUrl: string;
  assignedToEmployeeId: number;
}
