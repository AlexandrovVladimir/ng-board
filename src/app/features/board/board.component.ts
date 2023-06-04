import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Observable } from 'rxjs';

import { ColumnBuilderService } from '../../services/column-builder.service';
import { ColumnComponent } from '../column/column.component';
import { ColumnHeaderComponent } from '../column-header/column-header.component';
import { ColumnContentComponent } from '../column-content/column-content.component';
import { Column, Ticket } from '../../interfaces';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  standalone: true,
  imports: [CommonModule, ColumnComponent, ColumnHeaderComponent, ColumnContentComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardComponent {
  private columnBuilder = inject(ColumnBuilderService);
  columns$: Observable<Column[]> = this.columnBuilder.columnsList$;
  tickets$: Observable<Ticket[]> = this.columnBuilder.ticketsList$;
}
