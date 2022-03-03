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
  loadCurrentForecast() {
    const params = {
      lat: 42.33143,
      lon: -83.0458,
      appid: API_KEY,
    };
    return client.get('/weather', { params }).then(response => response.data);
  },
};

export default api;
