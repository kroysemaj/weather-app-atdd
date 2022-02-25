import { Provider } from 'react-redux';
import store from './store';
import CurrentForecast from './components/CurrentForecast';

const App = () => (
  <Provider store={store}>
    <CurrentForecast />
  </Provider>
);

export default App;
