import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NzEmptyModule } from 'ng-zorro-antd/empty';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, NzEmptyModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'shell';
}
