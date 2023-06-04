import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketComponent } from '../ticket/ticket.component';
import { Ticket, ColumnName } from '../../interfaces';

@Component({
  selector: 'app-column-content',
  templateUrl: './column-content.component.html',
  styleUrls: ['./column-content.component.scss'],
  standalone: true,
  imports: [CommonModule, TicketComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColumnContentComponent {
  tickets: Ticket[] = [];
  @Input() set ticketsList(_tickets: Ticket[]) {
    this.tickets = _tickets.filter(ticket => ticket.status === this.columnName);
  };
  @Input() columnName: ColumnName = 'To Do';
}
