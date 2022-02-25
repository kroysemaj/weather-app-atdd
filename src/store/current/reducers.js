import { STORE_CURRENT_FORECAST } from './actions';

const current = (state = {}, action) => {
  switch (action.type) {
    case STORE_CURRENT_FORECAST:
      return action.payload;
    default:
      return state;
  }
};

export default current;
