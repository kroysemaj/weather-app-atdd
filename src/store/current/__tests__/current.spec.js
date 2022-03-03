import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import currentReducer from '../reducers';
import { loadCurrentForecast } from '../actions';
import initialState from '../../../models/applicationState';

describe('Current forecast store', () => {
  describe('loadCurrentForecast action', () => {
    it('stores the current forecast', async () => {
      const response = {
        main: {
          temp_max: 80,
          temp_min: 78,
          feels_like: 76,
        },
        weather: [
          {
            icon: 'sunny',
          },
        ],
        name: 'Detroit',
      };

      const expected = {
        high: 80,
        low: 78,
        feelsLike: 76,
        icon: 'sunny',
        name: 'Detroit',
      };

      const api = {
        loadCurrentForecast: () => Promise.resolve(response),
      };

      const store = createStore(
        currentReducer,
        initialState.current,
        applyMiddleware(thunk.withExtraArgument(api)),
      );

      await store.dispatch(loadCurrentForecast());

      expect(store.getState()).toEqual(expected);
    });
  });
});
