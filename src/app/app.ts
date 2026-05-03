import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HereAndThere } from './components/here-and-there/here-and-there';
import { ThemeService } from './services/theme.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HereAndThere],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('barath-website');
  private themeService = inject(ThemeService);
}
