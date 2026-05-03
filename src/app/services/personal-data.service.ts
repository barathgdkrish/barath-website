import { Injectable, signal } from '@angular/core';
import { TravelEntry } from '../models/personal.model';
import { TRAVEL_DATA } from '../data/personal-data';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {
  public travelEntries = signal<TravelEntry[]>([]);

  constructor() {
    // Load and sort the static data by timestamp descending (newest first)
    const sortedData = [...TRAVEL_DATA].sort((a, b) => b.timestamp - a.timestamp);
    this.travelEntries.set(sortedData);
  }
}
