import { inject, Injectable } from '@angular/core';

import { BehaviorSubject, map, Observable } from 'rxjs';

import { Column, Ticket } from '../interfaces';
import { BoardStateService } from './board.state.service';

@Injectable({
  providedIn: 'root'
})
export class ColumnBuilderService {
  private boardState = inject(BoardStateService);

  private columns$: BehaviorSubject<Column[]> = new BehaviorSubject(this.boardState.getInitiallyColumns());
  columnsList$: Observable<Column[]> = this.columns$.asObservable();

  private tickets$: BehaviorSubject<Ticket[]> = new BehaviorSubject<Ticket[]>(this.boardState.getInitiallyTickets());
  ticketsList$: Observable<Ticket[]> = this.tickets$.asObservable();

  get currentTickets(): Ticket[] {
    return this.tickets$.getValue();
  }

  updateAllTickets(ticket: Ticket): void {
    this.tickets$.next(this.currentTickets.map(t => t.id === ticket.id ? ticket : t));
  }

  getSingleTicket(id: number): Ticket | undefined {
    return this.currentTickets.find(ticket => ticket.id === id);
  }

  updateSingleTicket(id: number) {

  }

  getSingleTicket$(id: number): Observable<Ticket | undefined> {
    return this.tickets$.pipe(map(tickets => tickets.find(ticket => ticket.id === id)))
  }

  updateSingleTicket$(id: number, value: string, field: string): Observable<Ticket> {
    return this.getSingleTicket$(id).pipe(map(ticket => ({ ...ticket!, [field]: value })));
  }
}
