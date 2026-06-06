export interface AQIMetrics {
  aqi: number;
  pm25: number;
  pm10: number;
  no2: number;
  co: number;
  temperature: number;
  humidity: number;
}

export interface ChartDataPoint {
  time: string;
  historical: number | null;
  predicted: number | null;
}

export interface Station {
  id: number;
  name: string;
  lat: number;
  lng: number;
  aqi: number;
  status: 'Good' | 'Moderate' | 'Unhealthy';
}

