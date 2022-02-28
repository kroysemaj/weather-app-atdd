import { SAVE_COORDINATES } from './actions';

const location = (state = {}, action) => {
  switch (action.type) {
    case SAVE_COORDINATES:
      console.log('location reducer:', action.type, action.payload);

      return action.payload;
    default:
      return state;
  }
};

export default location;
