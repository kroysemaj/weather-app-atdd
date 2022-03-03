export const STORE_CURRENT_FORECAST = 'STORE_CURRENT_FORECAST';

export const loadCurrentForecast = () => (dispatch, getState, api) => {
  api.loadCurrentForecast().then(response => {
    const current = {
      high: response.main.temp_max,
      low: response.main.temp_min,
      feelsLike: response.main.feels_like,
      icon: response.weather[0].icon,
      name: response.name,
    };
    dispatch(storeCurrentForecast(current));
  });
};

const storeCurrentForecast = current => ({
  type: STORE_CURRENT_FORECAST,
  payload: current,
});
