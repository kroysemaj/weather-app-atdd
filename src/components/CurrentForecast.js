import { useEffect } from 'react';

export const CurrentForecast = ({ loadCurrentForecast, forecast }) => {
  useEffect(() => {
    loadCurrentForecast();
  }, [loadCurrentForecast]);

  return (
    <div>
      <h3>{forecast.name}</h3>
    </div>
  );
};

export default CurrentForecast;
