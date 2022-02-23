import { useEffect } from 'react';

export const CurrentForecast = ({ loadCurrentForecast }) => {
  useEffect(() => {
    loadCurrentForecast();
  }, [loadCurrentForecast]);

  return (
    <div>
      <h1>Current Forecast</h1>
    </div>
  );
};

export default CurrentForecast;
