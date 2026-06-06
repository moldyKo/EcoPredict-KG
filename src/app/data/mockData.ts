import { AQIMetrics, ChartDataPoint, Station } from '../types';

export const currentMetrics: AQIMetrics = {
  aqi: 74,
  pm25: 23.5,
  pm10: 42.1,
  no2: 18.2,
  co: 0.6,
  temperature: 18,
  humidity: 55,
};

export const generateChartData = (): ChartDataPoint[] => {
  const data: ChartDataPoint[] = [];
  const now = new Date();
  
  // Последние 12 часов (Исторические данные)
  for (let i = 12; i > 0; i--) {
    const time = new Date(now.getTime() - i * 60 * 60 * 1000);
    data.push({
      time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      historical: Math.floor(60 + Math.sin(i * 0.5) * 15 + Math.random() * 5),
      predicted: null
    });
  }
  
  // Текущая точка
  data.push({
    time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    historical: 74,
    predicted: 74
  });

  // Следующие 24 часа (Прогноз ML)
  for (let i = 1; i <= 24; i++) {
    const time = new Date(now.getTime() + i * 60 * 60 * 1000);
    data.push({
      time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      historical: null,
      predicted: Math.floor(74 + Math.sin(i * 0.3) * 25 - (i * 0.4) + Math.random() * 8)
    });
  }
  
  return data;
};

export const mockStations: Station[] = [
  { id: 1, name: "Чуй / Манаса", lat: 42.8746, lng: 74.5844, aqi: 85, status: 'Moderate' },
  { id: 2, name: "7 Микрорайон", lat: 42.8252, lng: 74.6186, aqi: 42, status: 'Good' },
  { id: 3, name: "ТЭЦ Бишкек (Зона риска)", lat: 42.8740, lng: 74.6360, aqi: 156, status: 'Unhealthy' },
];
