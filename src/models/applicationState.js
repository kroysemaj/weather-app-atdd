/*
 * This is primarily to sketch out the shape of the
 * application state to guide implementation decisions.
 */

const initialApplicationState = {
  current: {
    high: 0,
    low: 0,
    icon: '',
  },
  city: '',
  coords: {
    lon: 0,
    lat: 0,
  },
  fiveDay: {},
};

export default initialApplicationState;
