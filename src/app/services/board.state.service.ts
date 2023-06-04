import { Injectable } from '@angular/core';
import { Column, Ticket } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class BoardStateService {
  getInitiallyColumns(): Column[] {
    return [
      { name: 'To Do' },
      { name: 'In Progress' },
      { name: 'Blocked' },
      { name: 'Test Failed' },
      { name: 'Testing' },
      { name: 'Done' }
    ];
  }

  getInitiallyTickets(): Ticket[] {
    return [
      { id: Date.now() + 1, title: 'Create APP', description: 'Create Drag&Drop APP', status: 'In Progress', priority: 'High' },
      { id: Date.now() + 2, title: 'Buy milk', description: '', status: 'To Do', priority: 'Medium' },
      { id: Date.now() + 3, title: 'Buy shoes', description: 'Buy shoes for Jane', status: 'Blocked', priority: 'Medium' },
    ];
  }
}
