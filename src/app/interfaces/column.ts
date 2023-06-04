export interface Column {
  name: ColumnName;
  // data: Observable<Ticket[] | []>;
}

export type ColumnName = 'To Do' | 'In Progress' | 'Blocked' | 'Test Failed' | 'Testing' | 'Done';
