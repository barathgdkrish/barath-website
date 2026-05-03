import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-here-and-there',
  imports: [RouterModule],
  templateUrl: './here-and-there.html',
  styleUrl: './here-and-there.scss',
})
export class HereAndThere {
  public themeService = inject(ThemeService);
}
