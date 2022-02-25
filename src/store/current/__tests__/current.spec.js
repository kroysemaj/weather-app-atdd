import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import currentReducer from '../reducers';
import { loadCurrentForecast } from '../actions';
import initialState from '../../../models/applicationState';

describe('Current forecast store', () => {
  describe('loadCurrentForecast action', () => {
    it('stores the current forecast', async () => {
      const expected = {
        current: {
          high: 80,
          low: 78,
          icon: 'sunny',
        },
      };

      const api = {
        loadCurrentForecast: () => Promise.resolve(expected),
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
