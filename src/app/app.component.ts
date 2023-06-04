import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

import { BoardComponent } from './features/board/board.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, BoardComponent, MatToolbarModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'board';
}
