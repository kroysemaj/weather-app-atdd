export const STORE_CURRENT_FORECAST = 'STORE_CURRENT_FORECAST';

export const loadCurrentForecast = () => (dispatch, getState, api) => {
  api.loadCurrentForecast().then(current => {
    dispatch(storeCurrentForecast(current));
  });
};

const storeCurrentForecast = current => ({
  type: STORE_CURRENT_FORECAST,
  payload: current,
});
