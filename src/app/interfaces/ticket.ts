import { ColumnName } from './column';

export interface Ticket {
  id: number;
  title: string;
  description: string;
  status: ColumnName;
  priority?: TicketPriority;
}

export type TicketPriority = 'High' | 'Medium' | 'Low';
