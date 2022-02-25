import axios from 'axios';
import API_KEY from './apiKey';

const client = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

/*
 *  TODO:
 * - get lat/long from geolocation api
 * - add lat/long to state
 * - use lat/long from state to load forecast
 */

const api = {
  loadCurrentForecast(lat, long) {
    const params = {
      appid: API_KEY,
      lat,
      long,
    };
    return client.get('/weather', { params }).then(response => response.data);
  },
};

export default api;
