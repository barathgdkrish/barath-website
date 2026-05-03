import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { PersonalDataService } from '../../services/personal-data.service';

@Component({
  selector: 'app-metamorphosis',
  imports: [DatePipe],
  templateUrl: './metamorphosis.html',
  styleUrl: './metamorphosis.scss',
})
export class Metamorphosis {
  public dataService = inject(PersonalDataService);
}
