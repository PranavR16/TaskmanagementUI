export interface Report
{
  reportid: number;
  title: string;
  content: string;
  pendingTasks: number;
  taskCount: number,
  completedTasks: number,
  status: string,
  period: string,
  teamName:string
}
