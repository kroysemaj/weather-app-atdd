import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducter from './reducers';

const store = createStore(
  rootReducter,
  compose(applyMiddleware(thunk), devToolsEnhancer()),
);

export default store;
