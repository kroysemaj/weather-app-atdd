/*
 * This is primarily to sketch out the shape of the
 * application state to guide implementation decisions.
 */

const initialApplicationState = {
  // comes from weather api /weather
  current: {
    high: 0,
    low: 0,
    icon: '',
  },
  // comes from API /weather response
  city: '',
  //comes from browser geolocation or user input (city or zip)
  coords: {
    lon: 0,
    lat: 0,
  },
  // comes from weather api /fiveday
  fiveDay: {},
};

export default initialApplicationState;
