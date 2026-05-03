export interface TravelEntry {
  id: string;
  timestamp: number;
  semanticLocation: string; // e.g., "Toronto, ON"
  coordinates: { lat: number; lng: number } | null;
  photoPath: string; // e.g., "assets/images/travel/IMG_123.jpg"
}
